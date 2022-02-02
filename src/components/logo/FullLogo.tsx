import { ComponentType, FC } from "react";
import styled from "styled-components";

const FullLogoRoot = styled.span`
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1.75rem;

  .first-name {
    color: var(--color-primary-main);
  }

  .last-name {
    color: var(--color-secondary-main);
  }
`;

interface FullLogoProps {
  as?: string | ComponentType<any>;
  href?: string;
}

const FullLogo: FC<FullLogoProps> = ({ as, href }) => {
  return (
    <FullLogoRoot as={as} href={href}>
      <span className="first-name">Justin</span>{" "}
      <span className="last-name">Russo</span>
    </FullLogoRoot>
  );
};

export default FullLogo;
