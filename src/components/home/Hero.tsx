import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import config from "../../config";
import Button from "../common/Button";
import Social from "../Social";

export const HeroRoot = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .content {
    padding: 100px 20px;
  }

  .profile-picture-wrapper {
    width: 300px;
    height: 300px;
    margin: 0 auto 15px;
    @media screen and (max-width: 1599px) {
      width: 245px;
      height: 245px;
    }
    @media screen and (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  .profile-picture {
    border-radius: 100%;
    display: inline-block;
    height: auto;
    mask-image: url(/images/hero-shape.svg);
    mask-position: center center;
    mask-repeat: no-repeat;
    mask-size: auto auto;
    max-width: 100%;
    opacity: 1;
    transition: all 1s ease;
    visibility: visible;
    width: 100%;
  }

  .name {
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 14px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 480px) {
      font-size: 35px;
    }
  }

  .extra {
    position: relative;
    opacity: 1;
    visibility: visible;
    left: 0px;
    transition-delay: 0.8s;
    transition: all 1s ease;
  }

  .text {
    max-width: 500px;
    margin: 0px auto 32px auto;
    @media screen and (max-width: 575px) {
      font-size: 15px;
    }
  }
`;

const HeroButtonWrapper = styled.div`
  padding-top: 25px;
`;

const Hero: FC = () => {
  return (
    <HeroRoot className="edina_tm_hero" id="home">
      <div className="content">
        <div
          className="profile-picture-wrapper"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Image
            src="/images/profile-portrait.jpg"
            alt="hero image"
            className="profile-picture"
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
            {config.personal.shortDescription}
          </p>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <Social />
          </div>
          <HeroButtonWrapper
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Button as="a" href="img/cv.png" download className="color">
              Resume
            </Button>
          </HeroButtonWrapper>
        </div>
      </div>
    </HeroRoot>
  );
};

export default Hero;
