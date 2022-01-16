import ReactGA from "react-ga";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        testMode: process.env.NEXT_PUBLIC_VERCEL_ENV !== "production",
      });
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
