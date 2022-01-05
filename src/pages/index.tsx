import type { NextPage } from "next";
import { useEffect, useState } from "react";

import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import WorkSection from "../components/home/WorkSection";
import { navDelay } from "../theme/utils";

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isMounted]);

  return isMounted ? (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </>
  ) : null;
};

export default Home;
