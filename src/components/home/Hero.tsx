import Image from "next/image";
import { FC } from "react";
import config from "../../config";
import Social from "../Social";

const Hero: FC = () => {
  return (
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image
            src="/images/profile-portrait.jpg"
            alt="hero image"
            layout="fill"
          />
        </div>
        <div className="extra">
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {config.personal.name}
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {config.personal.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <a href="img/cv.png" download className="color">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
