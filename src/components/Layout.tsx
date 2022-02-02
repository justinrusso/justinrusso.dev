import { FC, useState } from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Head from "./Head";
import Intro from "../components/Intro";
import Nav from "./Nav";
import GlobalStyle from "../theme/GlobalStyle";
import { useRouter } from "next/router";

const Main = styled.main`
  width: 100%;
  overflow-x: hidden;
  transition: all 0.5s ease;
  @media screen and (min-width: 1200px) {
    padding-left: 288px;
  }
  @media screen and (min-width: 1501px) {
    padding-left: 320px;
  }
`;

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <>
      <Head />
      <GlobalStyle />
      {isLoading && isHome ? (
        <Intro onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
