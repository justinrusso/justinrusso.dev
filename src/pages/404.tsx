import Link from "next/link";
import styled from "styled-components";
import { NextPage } from "next";

import AnimateInView from "../components/utils/AnimateInView";
import Button from "../components/common/Button";
import { transitionNames } from "../theme/transitions";

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Paragraph = styled.p`
  margin-bottom: 35px;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 18px;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 125px;
  line-height: 1;
  letter-spacing: 5px;
  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;

const Custom404: NextPage = () => {
  return (
    <Hero>
      <div>
        <AnimateInView
          as={Title}
          transitionProps={{
            classNames: transitionNames.fadeUp,
            timeout: 0,
          }}
        >
          404!
        </AnimateInView>
        <AnimateInView
          as={Paragraph}
          transitionProps={{
            classNames: transitionNames.fadeUp,
            timeout: 0,
          }}
          style={{
            transitionDelay: "50ms",
          }}
        >
          The page you are looking for could not be found.
        </AnimateInView>

        <AnimateInView
          className="edina_tm_button"
          transitionProps={{
            classNames: transitionNames.fadeUp,
            timeout: 0,
          }}
          style={{
            transitionDelay: "100ms",
          }}
        >
          <Link href="/" passHref>
            <Button as="a">BACK HOME</Button>
          </Link>
        </AnimateInView>
      </div>
    </Hero>
  );
};

export default Custom404;
