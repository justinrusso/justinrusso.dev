import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

export const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Justin Russo",
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between flex-wrap p-6 lg:hidden">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Justin Russo
          </span>
        </div>
        <div className="bloc">
          <button className="flex items-center px-3 py-2 border rounded">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="hidden lg:block w-2/12 flex flex-row">
          <div className="font-semibold text-xl tracking-tight">
            Justin Russo
          </div>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
        </nav>
        <div className="flex-1">
          <div className="lg:mx-10 lg:mt-2">{children}</div>
        </div>
      </div>
    </div>
  </>
);
