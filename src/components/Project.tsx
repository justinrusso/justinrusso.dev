import Image from "next/image";
import styled from "styled-components";
import { FC, PropsWithChildren } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import AnimateInView from "./utils/AnimateInView";
import { transitionNames } from "../theme/transitions";

const ProjectRoot = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  transition: var(--transition);

  &:not(:last-of-type) {
    margin-bottom: 70px;

    @media (min-width: 900px) {
      margin-bottom: 100px;
    }
  }

  @media (min-width: 900px) {
    box-shadow: none;
    transition: none;
  }
`;

const ProjectContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  grid-area: 1 / 1 / -1 / 7;
  grid-column: 1 / -1;
  padding: 40px 40px 30px;
  z-index: 5;

  @media (min-width: 900px) {
    grid-column: 1 / 9;
  }

  @media (min-width: 1200px) {
  }

  ${ProjectRoot}:nth-of-type(2n+1) & {
    padding: 40px 40px 30px;
    text-align: left;

    @media (min-width: 900px) {
      grid-column: 5 / -1;
      padding: 0;
      text-align: right;
    }

    @media (min-width: 1200px) {
      grid-column: 7 / -1;
    }
  }

  .project-title {
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      padding: 0 0 20px;
    }
  }

  .project-description {
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 20px 0;
    border-radius: var(--border-radius);

    @media (min-width: 900px) {
      background-color: var(--color-bg);
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.07),
        rgba(255, 255, 255, 0.07)
      );
      box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
      padding: 25px;
    }
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  padding: 25px 0 10px;
  list-style: none;

  li {
    padding: 0 20px 5px 0;
    font-family: var(--font-mono);
    font-size: 13px;
    white-space: nowrap;
  }

  @media (min-width: 900px) {
    ${ProjectRoot}:nth-of-type(2n+1) & {
      justify-content: flex-end;

      li {
        padding: 0 0 5px 20px;
      }
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 6px;
  margin-left: -10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    svg {
      fill: transparent;
      color: inherit;
      width: 22px;
      height: 22px;
    }
  }
  @media (min-width: 900px) {
    ${ProjectRoot}:nth-of-type(2n+1) & {
      justify-content: flex-end;
      margin-left: 0px;
      margin-right: -10px;
    }
  }
`;

const ProjectImageWrapper = styled.div`
  transition: var(--transition);
  position: relative;
  grid-area: 1 / 6 / -1 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  height: 100%;

  @media (min-width: 900px) {
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
    grid-column: 6 / -1;
    height: auto;
  }

  ${ProjectRoot}:nth-of-type(2n+1) & {
    @media (min-width: 900px) {
      grid-column: 1 / 8;
    }
  }

  a {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    vertical-align: middle;
    position: relative;
    transition: var(--transition);

    @media (min-width: 900px) {
      filter: grayscale(0.9);

      &:hover {
        filter: none;
      }
    }
  }

  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 3;
    background-color: var(--color-bg);
    mix-blend-mode: screen;

    @media (min-width: 900px) {
      display: none;
    }
  }

  a > * {
    opacity: 0.1 !important;

    @media (min-width: 900px) {
      opacity: 1 !important;
    }
  }
`;

interface ProjectProps {
  imageSrc?: string;
  name: string;
  repoUrl?: string;
  tech: string[];
  url?: string;
}

const Project: FC<PropsWithChildren<ProjectProps>> = ({
  children,
  imageSrc,
  name,
  repoUrl,
  tech,
  url,
}) => {
  const primaryLink = url || repoUrl || "#";

  return (
    <AnimateInView
      as={ProjectRoot}
      transitionProps={{
        classNames: transitionNames.fadeUp,
      }}
    >
      <ProjectContent>
        <h3 className="project-title">
          <a href={primaryLink} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </h3>
        <div className="project-description">
          <p>{children}</p>
        </div>
        <TechList>
          {tech.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </TechList>
        <ProjectLinks>
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          )}
        </ProjectLinks>
      </ProjectContent>
      <ProjectImageWrapper>
        <a href={primaryLink} target="_blank" rel="noopener noreferrer">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt=""
              width={580}
              height={363}
              layout="responsive"
            />
          )}
        </a>
      </ProjectImageWrapper>
    </AnimateInView>
  );
};

export default Project;
