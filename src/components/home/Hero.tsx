import { FC } from "react";
import styled from "styled-components";

import config from "../../config";
import Button from "../common/Button";
import Container from "../common/Container";

const HeroRoot = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;

  justify-content: center;
  flex-direction: column;

  h1,
  h2,
  h3 {
    line-height: 1.1;
  }

  h1 {
    padding: 0px 0px 30px 4px;
    margin: 0;
    color: var(--color-primary-main);
    font-size: clamp(16px, 5vw, 20px);
    font-weight: 400;
  }

  h2,
  h3 {
    margin: 0px;
    font-size: clamp(40px, 8vw, 70px);
  }

  h2 {
    color: var(--color-secondary-light);
  }

  h3 {
    color: rgba(var(--color-base-secondary-light), 0.7);
  }

  p {
    max-width: 540px;
    padding: 20px 0 0;
  }
`;

const HeroButtonWrapper = styled.div`
  padding-top: 25px;
`;

const Hero: FC = () => {
  return (
    <Container>
      <HeroRoot id="home">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Hello, my name is
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {config.personal.name}.
        </h2>
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-once="true"
        >
          I&apos;m a full-stack software engineer.
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
          data-aos-once="true"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          dui felis. Sed ultrices diam et tincidunt ornare. Ut sit amet gravida
          massa. Aliquam non turpis commodo, accumsan mi ut, ullamcorper nisi.
          Suspendisse vitae nisi dignissim nibh fringilla fringilla non id quam.
        </p>
        <HeroButtonWrapper
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <Button as="a" href="img/cv.png" download color="primary">
            Resume
          </Button>
        </HeroButtonWrapper>
      </HeroRoot>
    </Container>
  );
};

export default Hero;
