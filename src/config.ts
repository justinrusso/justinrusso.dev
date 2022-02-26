import { BsJournalCode } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail, FiUser } from "react-icons/fi";

const config = {
  navLinks: [
    { Icon: FiUser, name: "About", url: "/#about" },
    {
      Icon: BsJournalCode,
      name: "Work",
      url: "/#work",
    },
    {
      Icon: FiMail,
      name: "Contact",
      url: "/#contact",
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
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/justin-k-russo/",
    },
    {
      Icon: FaAngellist,
      name: "AngelList",
      url: "https://angel.co/u/justin-k-russo",
    },
  ],

  personal: {
    shortDescription:
      "Justin Russo is a passionate software engineer driven by the desire to create new, amazing experiences.",
    longDescription:
      "I'm a passionate software engineer driven by the desire to create new, amazing experiences. Since creating my first application for Twitch and seeing it in action, I was obsessed with creating solutions to solve problems and enhance users' experiences.",
    name: "Justin Russo",
    email: "justin@justinrusso.dev",
    resumeUrl:
      "https://justinrusso.s3.amazonaws.com/portfolio/Russo_Justin_Web_Resume.pdf",
  },

  recentSkills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Node.js",
    "React",
    "Redux",
    "Electron",
    "PostgreSQL",
  ],
};

export default config;
