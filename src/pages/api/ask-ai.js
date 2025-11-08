// pages/api/send.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  try {
    // Step 1: Call Groq API
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!groqRes.ok) {
      const errorData = await groqRes.json();
      console.error('Groq API Error:', errorData);

      if (errorData.code === 'model_decommissioned') {
        return res.status(400).json({
          error: 'The AI model has been updated. Please refresh your page and try again.',
          details: errorData,
        });
      }

      throw new Error('AI request failed');
    }

    const groqData = await groqRes.json();
    const aiReply = groqData.choices?.[0]?.message?.content || 'Sorry, something went wrong.';

    // Step 2: Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'AI Response to Your Query',
      text: aiReply,
    });

    return res.status(200).json({ success: true, reply: aiReply });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
