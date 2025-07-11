'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error && data.error.includes('The AI model has been updated')) {
          alert('The system has been updated. Please refresh your page and try again.');
          window.location.reload();
          return;
        }
        throw new Error(data.error || 'Something went wrong');
      }

      setSent(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      alert(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Contact Our Team</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded-xl p-3"
            placeholder="Agasthya"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email<span className="text-red-500">*</span></label>
          <input
            type="email"
            required
            className="w-full border border-gray-300 rounded-xl p-3"
            placeholder="Agasthya@.co.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone<span className="text-red-500">*</span></label>
          <input
            type="tel"
            required
            className="w-full border border-gray-300 rounded-xl p-3"
            placeholder="+91 7075 704156"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message<span className="text-red-500">*</span></label>
          <textarea
            required
            className="w-full border border-gray-300 rounded-xl p-3 h-32"
            placeholder="Interested in our snack food selection"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl w-full"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {sent && (
          <p className="text-green-600 font-medium text-center pt-2">
            Response sent to your email!
          </p>
        )}
      </form>
    </div>
  );
}
