import type { NextPage } from "next";
import About from "../components/home/about";
import Hero from "../components/home/Hero";

const Home: NextPage = () => {
  return (
    <div className="home-light edina_tm_mainpart">
      <Hero />
      <About />

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/* <Portfolio /> */}
        </div>
      </div>

      <div className="edina_tm_contact" id="contact">
        <div className="container">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
