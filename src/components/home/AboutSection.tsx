import Image from "next/image";
import styled from "styled-components";
import { FC } from "react";

import AnimateInView from "../utils/AnimateInView";
import Skills from "./Skills";
import config from "../../config";
import Container from "../common/Container";
import SectionHeader from "../SectionHeader";
import { transitionNames } from "../../theme/transitions";

const AboutRoot = styled.section`
  .content {
    width: 100%;
    display: grid;
    padding-top: 60px;

    grid-template-columns: 3fr 2fr;
    gap: 50px;

    @media screen and (max-width: 1040px) {
      grid-template-columns: 1fr;
    }
  }

  .info {
    width: 100%;
    padding-bottom: 55px;

    h3 {
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 15px;

      span {
        font-weight: 600;
      }
    }

    p {
      max-width: 90%;

      @media (max-width: 1040px) {
        max-width: 100%;
      }
    }
  }

  .skills {
    width: 100%;

    .desc {
      max-width: 90%;
    }
  }
`;

const PortraitSide = styled.div`
  display: flex;

  @media screen and (max-width: 1040px) {
    justify-content: center;
  }

  .portrait-wrapper {
    max-width: 300px;
    width: 100%;

    img {
      border-radius: var(--border-radius);
    }
  }

  .one-to-one {
    position: relative;
    padding-top: 100%;
  }
`;

const AboutSection: FC = () => {
  return (
    <AboutRoot className="home-section" id="about">
      <Container>
        <SectionHeader>About Me</SectionHeader>
        <div className="content">
          <AnimateInView
            transitionProps={{
              classNames: transitionNames.fadeRight,
            }}
            style={{
              transitionDelay: "100ms",
            }}
          >
            <div className="info">
              <h3>
                Hi, I&apos;m <span>{config.personal.name}</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nec dui felis. Sed ultrices diam et tincidunt ornare. Ut sit
                amet gravida massa. Aliquam non turpis commodo, accumsan mi ut,
                ullamcorper nisi. Suspendisse vitae nisi dignissim nibh
                fringilla fringilla non id quam.
              </p>
            </div>
            <div className="skills">
              <p className="desc">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <Skills />
            </div>
          </AnimateInView>
          <AnimateInView
            as={PortraitSide}
            transitionProps={{
              classNames: transitionNames.fadeLeft,
            }}
            style={{
              transitionDelay: "200ms",
            }}
          >
            <div className="portrait-wrapper">
              <div className="one-to-one">
                <Image
                  src="/images/profile-portrait.jpg"
                  alt="hero image"
                  className="profile-picture"
                  layout="fill"
                />
              </div>
            </div>
          </AnimateInView>
        </div>
      </Container>
    </AboutRoot>
  );
};

export default AboutSection;
