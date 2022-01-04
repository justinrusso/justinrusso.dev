import { FC, useState } from "react";
import Skills from "./Skills";
import config from "../../config";
import styled from "styled-components";
import Image from "next/image";
import Container from "../common/Container";
import SectionHeader from "../SectionHeader";

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

  .portrait-side {
    display: flex;

    @media screen and (max-width: 1040px) {
      justify-content: center;
    }
  }

  .portrait-wrapper {
    max-width: 300px;
    width: 100%;
  }

  .one-to-one {
    position: relative;
    padding-top: 100%;
  }
`;

const About: FC = () => {
  return (
    <AboutRoot className="edina_tm_about home-section" id="about">
      <Container>
        <SectionHeader>About Me</SectionHeader>
        <div className="content">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div className="info">
              <h3>
                Hi, I&apos;m <span>{config.personal.name}</span>
              </h3>
              <p>{config.personal.longDescription}</p>
            </div>
            <div className="skills">
              <p className="desc">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <Skills />
            </div>
          </div>
          <div
            className="portrait-side"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
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
          </div>
        </div>
      </Container>
    </AboutRoot>
  );
};

export default About;
