import styled from "styled-components";
import { FC } from "react";

import config from "../../config";

const SkillsRoot = styled.ul`
  width: 100%;
  display: grid;
  padding-top: 20px;
  flex-wrap: wrap;
  grid-template-columns: max-content max-content;
  column-gap: 20px;
  row-gap: 10px;
  color: var(--color-text-secondary);
  list-style: none;

  @media screen and (max-width: 575px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.li`
  padding-left: 20px;
  position: relative;

  &:before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--color-primary-dark);
  }
`;

const Skills: FC = () => {
  return (
    <SkillsRoot>
      {config.recentSkills.map((name) => (
        <Skill key={name}>{name}</Skill>
      ))}
    </SkillsRoot>
  );
};

export default Skills;
