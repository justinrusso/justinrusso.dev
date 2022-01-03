import type { NextPage } from "next";

import Container from "../components/common/Container";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import WorkSection from "../components/home/WorkSection";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <WorkSection />

      <div className="edina_tm_contact" id="contact">
        <Container>
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="extra_info">{/* <Address /> */}</div>
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ipsum sit nibh amet egestas tellus.
                </p>
              </div>
              <div className="fields">{/* <Contact /> */}</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
