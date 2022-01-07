import { FC } from "react";
import NextHead from "next/head";

import config from "../config";

const seo = {
  description: config.personal.shortDescription,
  image: null,
  title: "Justin Russo",
  url: "https://justinrusso.dev",
};

const Head: FC = () => {
  return (
    <NextHead>
      <title>Justin Russo</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />

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
