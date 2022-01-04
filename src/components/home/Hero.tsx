import { FC } from "react";
import styled from "styled-components";

import config from "../../config";
import Container from "../common/Container";

const HeroRoot = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;

  justify-content: center;
  flex-direction: column;

  h1 {
    padding: 0px 0px 20px 4px;
    color: var(--color-primary-main);
    font-size: clamp(16px, 5vw, 24px);
    font-weight: 400;
    font-family: var(--font-sans);
  }

  h2,
  h3 {
    padding: 0;
    font-size: clamp(40px, 8vw, 70px);
  }

  h2 {
    color: var(--color-secondary-light);
  }

  h3 {
    color: rgba(
      var(--color-base-secondary-light),
      var(--text-secondary-opacity)
    );
  }

  p {
    max-width: 540px;
    padding: 20px 0 0;
  }

  .no-wrap {
    white-space: nowrap;
  }
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
          I&apos;m a full-stack{" "}
          <span className="no-wrap">software engineer.</span>
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
      </HeroRoot>
    </Container>
  );
};

export default Hero;
