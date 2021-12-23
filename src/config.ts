import {
  FiBook,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
  FiUser,
} from "react-icons/fi";

const config = {
  navLinks: [
    {
      Icon: FiHome,
      name: "Home",
      url: "#home",
    },
    { Icon: FiUser, name: "About", url: "#about" },
    {
      Icon: FiBook,
      name: "Portfolio",
      url: "#portfolio",
    },
    {
      Icon: FiMail,
      name: "Contact",
      url: "#contact",
    },
  ],

  socials: [
    {
      Icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/justinrusso",
    },
    {
      Icon: FiLinkedin,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/justin-k-russo/",
    },
  ],

  personal: {
    name: "Justin Russo",
    email: "justin@justinrusso.dev",
  },
};

export default config;
