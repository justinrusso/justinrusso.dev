import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import config from "../../config";
import Button from "../common/Button";
import Social from "../Social";

const HeroRoot = styled.section`
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
            <Button as="a" href="img/cv.png" download color="primary">
              Resume
            </Button>
          </HeroButtonWrapper>
        </div>
      </div>
    </HeroRoot>
  );
};

export default Hero;
