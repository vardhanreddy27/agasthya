import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head><link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Learn about Agastya SuperFoods – pioneers in millet-based nutrition. Discover our mission, values, and the story behind our healthy food revolution." />
        <meta name="keywords" content="millet products, superfoods, healthy food India, Agastya SuperFoods, organic food, nutrition, Nutrix, Farmik" />
        <meta name="author" content="Agastya SuperFoods" />
        <meta property="og:title" content="About Us | Agastya SuperFoods" />
        <meta property="og:description" content="Discover the journey and mission behind Agastya SuperFoods, your partner in millet-based health and wellness." />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta property="og:url" content="https://agasthyasuperfoods.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://agasthyasuperfoods.com/about" />
        {/* Lenis Smooth Scroll CDN */}
        {/* <script
          src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@latest/bundled/lenis.min.js"
          defer
        ></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
