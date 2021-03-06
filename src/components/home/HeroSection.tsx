import { FC } from "react";
import styled from "styled-components";

import AnimateInView from "../utils/AnimateInView";
import config from "../../config";
import Container from "../common/Container";
import { transitionNames } from "../../theme/transitions";
import Button from "../common/Button";

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

  .button-wrapper {
    padding-top: 20px;
  }

  @media (min-width: 600px) {
    .no-wrap {
      white-space: nowrap;
    }
  }
`;

const HeroSection: FC = () => {
  return (
    <Container>
      <HeroRoot id="home">
        <AnimateInView
          as="h1"
          transitionProps={{
            classNames: transitionNames.fadeUp,
          }}
          style={{
            transitionDelay: "100ms",
          }}
        >
          Hello, my name is
        </AnimateInView>
        <AnimateInView
          as="h2"
          transitionProps={{
            classNames: transitionNames.fadeUp,
          }}
          style={{
            transitionDelay: "200ms",
          }}
        >
          {config.personal.name}.
        </AnimateInView>
        <AnimateInView
          as="h3"
          transitionProps={{
            classNames: transitionNames.fadeUp,
          }}
          style={{
            transitionDelay: "300ms",
          }}
        >
          I&apos;m a full-stack{" "}
          <span className="no-wrap">software engineer.</span>
        </AnimateInView>
        <AnimateInView
          as="p"
          transitionProps={{
            classNames: transitionNames.fadeUp,
          }}
          style={{
            transitionDelay: "400ms",
          }}
        >
          {config.personal.longDescription}
        </AnimateInView>
        <AnimateInView
          className="button-wrapper"
          transitionProps={{
            classNames: transitionNames.fadeUp,
          }}
          style={{
            transitionDelay: "500ms",
          }}
        >
          <Button
            as="a"
            href={config.personal.resumeUrl}
            color="primary"
            target="_blank"
          >
            Resume
          </Button>
        </AnimateInView>
      </HeroRoot>
    </Container>
  );
};

export default HeroSection;
