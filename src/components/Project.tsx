import Image from "next/image";
import styled from "styled-components";
import { FC, PropsWithChildren } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectRoot = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    padding-bottom: 100px;
  }

  .project-title {
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      padding: 0 0 20px;
    }
  }

  .project-description {
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--color-bg);
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.07)
    );
  }
`;

const ProjectContent = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;

  ${ProjectRoot}:nth-of-type(2n+1) & {
    grid-column: 7 / -1;
    text-align: right;
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

  ${ProjectRoot}:nth-of-type(2n+1) & {
    justify-content: flex-end;

    li {
      padding: 0 0 5px 20px;
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

  ${ProjectRoot}:nth-of-type(2n+1) & {
    justify-content: flex-end;
    margin-left: 0px;
    margin-right: -10px;
  }
`;

const ProjectImageWrapper = styled.div`
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  transition: var(--transition);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;

  ${ProjectRoot}:nth-of-type(2n+1) & {
    grid-column: 1 / 8;
  }

  a {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    vertical-align: middle;
    position: relative;
    filter: grayscale(0.9);
    transition: var(--transition);

    &:hover {
      filter: none;
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
    <ProjectRoot>
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
    </ProjectRoot>
  );
};

export default Project;
