import { FC } from "react";

import Container from "../common/Container";
import Project from "../Project";
import SectionHeader from "../SectionHeader";

const WorkSection: FC = () => {
  return (
    <div id="work">
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
      </Container>
    </div>
  );
};

export default WorkSection;
