import { FC, useState } from "react";
import Skills from "./Skills";
import config from "../../config";

const About: FC = () => {
  return (
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
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
            <div className="my_skills">
              <p className="desc">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
