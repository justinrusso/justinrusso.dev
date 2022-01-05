import { FC } from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Head from "./Head";
import Nav from "./Nav";
import GlobalStyle from "../theme/GlobalStyle";

const Main = styled.main`
  width: 100%;
  transition: all 0.5s ease;
  @media screen and (min-width: 1200px) {
    padding-left: 288px;
  }
  @media screen and (min-width: 1501px) {
    padding-left: 320px;
  }
`;

const Layout: FC = ({ children }) => {
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
