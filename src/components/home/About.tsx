import { FC, useState } from "react";
import Skills from "./Skills";
import config from "../../config";
import styled from "styled-components";

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

    grid-template-columns: 1fr 1fr;
    column-gap: 200px;
    row-gap: 60px;

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

    .dodo_progress {
      width: 100%;
      display: grid;
      padding-top: 40px;
      flex-wrap: wrap;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      color: var(--color-text-secondary);

      @media screen and (max-width: 575px) {
        margin: 0;
        grid-template-columns: 1fr;
      }
    }
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
              <div className="dodo_progress">
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutRoot>
  );
};

export default About;
