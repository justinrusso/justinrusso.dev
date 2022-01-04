import type { NextPage } from "next";

import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import WorkSection from "../components/home/WorkSection";

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </>
  );
};

export default Home;
