import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
  navItems?: NavItem[];
};

type NavItem = {
  title: string;
  route: string;
};

export const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Justin Russo",
  navItems = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
  ],
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between flex-wrap p-6 lg:hidden bg-white dark:bg-gray-800 shadow-lg z-40">
        <div className="flex items-center flex-shrink-0 mr-6">
          <h1 className="font-semibold text-xl tracking-tight">Justin Russo</h1>
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
      <div className="flex flex-1 min-h-0">
        <nav className="hidden lg:block w-2/12 flex flex-row shadow-lg bg-white dark:bg-gray-900 z-50 text-center divide-y-2 divide-gray-200 dark:divide-gray-700">
          <div className="py-12">
            <h1 className="font-semibold text-2xl tracking-tight">
              Justin Russo
            </h1>
          </div>
          <div>
            <ul className="divide-y-2 divide-gray-200 dark:divide-gray-700">
              {navItems.map((navItem: NavItem) => (
                <>
                  <li className="nav-item relative">
                    <div className="py-4">
                      <Link href={navItem.route}>
                        <a>{navItem.title}</a>
                      </Link>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div>{/* TODO: Social Media links (icons) */}</div>
        </nav>
        <div className="flex-1 lg:px-10 lg:pt-10 overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  </>
);
