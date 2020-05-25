import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style>
            {`
            #__next { height: 100% }
          `}
          </style>
        </Head>
        <body className="bg-gray-100 dark:bg-black h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
