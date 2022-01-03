import { FC } from "react";
import NextHead from "next/head";

const seo = {
  description: "Justin Russo is a full-stack software engineer.",
  image: null,
  title: "Justin Russo",
  url: "https://justinrusso.dev",
};

const Head: FC = () => {
  return (
    <NextHead>
      <meta charSet="utf-8" />

      <title>Justin Russo</title>

      {/* <link rel="icon" href="/favicon.ico" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="*" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </NextHead>
  );
};

export default Head;
