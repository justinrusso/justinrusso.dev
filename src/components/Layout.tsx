import "aos/dist/aos.css";

import { FC, useEffect } from "react";
import AOS from "aos";

import Footer from "./Footer";
import Head from "./Head";
import Nav from "./Nav";

const Layout: FC = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
