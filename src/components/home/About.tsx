import { FC, useState } from "react";
import Skills from "./Skills";
import config from "../../config";
import styled from "styled-components";
import Image from "next/image";

const AboutRoot = styled.section`
  width: 100%;
  padding-bottom: 170px;
  padding-top: 120px;

  @media screen and (max-width: 991px) {
    padding-bottom: 140px;
    padding-top: 90px;
  }

  .section-title {
    font-size: 45px;
    font-weight: 700;
    line-height: 1;
  }

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
    <AboutRoot className="edina_tm_about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
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
      </div>
    </AboutRoot>
  );
};

export default About;