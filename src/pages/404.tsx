import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import Button from "../components/common/Button";

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Paragraph = styled.p`
  margin-bottom: 35px;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 18px;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 125px;
  line-height: 1;
  letter-spacing: 5px;
  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;

const Custom404: NextPage = () => {
  return (
    <Hero>
      <div>
        <Title data-aos="fade-up" data-aos-duration="1200">
          404!
        </Title>
        <Paragraph
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          The page you are looking for could not be found.
        </Paragraph>

        <div
          className="edina_tm_button"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <Link href="/" passHref>
            <Button as="a">BACK HOME</Button>
          </Link>
        </div>
      </div>
    </Hero>
  );
};

export default Custom404;
