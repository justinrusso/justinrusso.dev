import "aos/dist/aos.css";

import { FC, useEffect } from "react";
import AOS from "aos";
import styled from "styled-components";

import Footer from "./Footer";
import Head from "./Head";
import Nav from "./Nav";
import GlobalStyle from "../theme/GlobalStyle";

const Main = styled.main`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  transition: all 0.5s ease;
  @media screen and (min-width: 1200px) {
    padding-left: 288px;
  }
  @media screen and (min-width: 1501px) {
    padding-left: 320px;
  }
`;

const Layout: FC = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-cubic",
    });
  }, []);
  return (
    <>
      <Head />
      <GlobalStyle />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
