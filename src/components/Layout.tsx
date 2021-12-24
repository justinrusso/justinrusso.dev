import "aos/dist/aos.css";

import { FC, useEffect } from "react";
import AOS from "aos";

import Footer from "./Footer";
import Head from "./Head";
import Nav from "./Nav";
import GlobalStyle from "../theme/GlobalStyle";

const Layout: FC = ({ children }) => {
  useEffect(() => {
    AOS.init();
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <Head />
      <GlobalStyle />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
