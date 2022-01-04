import { FC } from "react";

import Container from "../common/Container";
import Project from "../Project";
import SectionHeader from "../SectionHeader";

const WorkSection: FC = () => {
  return (
    <section id="work" className="home-section">
      <Container>
        <SectionHeader>Some of My Work</SectionHeader>
        <Project
          name="Slurp"
          url="https://jrusso-slurp.herokuapp.com/"
          imageSrc="https://github.com/justinrusso/Slurp/blob/main/docs/images/homepage_ss.jpg?raw=true"
          repoUrl="https://github.com/justinrusso/Slurp"
          tech={["JavaScript", "Express", "PostgreSQL", "React", "Redux"]}
        >
          Slurp is the perfect way to find the best Ramen in your area and is
          inspired by Yelp.
        </Project>
        <Project
          name="CodeX"
          url="https://codexappaa.herokuapp.com/"
          imageSrc="https://github.com/kvh8899/week13-project/raw/main/docs/images/screens-readme/homepage.png"
          repoUrl="https://github.com/kvh8899/week13-project"
          tech={["JavaScript", "Express", "Pug", "PostgreSQL"]}
        >
          CodeX is an online publishing platform, for members of the tech
          industry, inspired by Medium.com. On it, you can write, read, and
          connect with others, on such topics as: software engineering, computer
          science, data science, machine learning, and more.
        </Project>
      </Container>
    </section>
  );
};

export default WorkSection;