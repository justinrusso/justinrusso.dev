import type { NextPage } from "next";

import About from "../components/home/About";
import ContactSection from "../components/home/ContactSection";
import Hero from "../components/home/Hero";
import WorkSection from "../components/home/WorkSection";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <WorkSection />
      <ContactSection />
    </>
  );
};

export default Home;
