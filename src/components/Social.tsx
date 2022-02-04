import styled from "styled-components";
import { CSSProperties, FC } from "react";

import config from "../config";

const SocialRoot = styled.ul`
  margin: 0;
  list-style-type: none;
  list-style: none;
`;

const SocialListItem = styled.li`
  margin: 0;
  display: inline-flex;
  align-items: center;
  padding: 3px 15px;

  &:not(:last-child) {
    border-right: 1px solid var(--color-divider);
  }
`;

const IconButton = styled.a`
  color: var(--color-text-secondary);
  line-height: 1;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: var(--color-primary-main);
  }

  svg {
    color: inherit;
    fill: transparent;
    height: 22px;
    width: 22px;
  }

  &[title="AngelList"] {
    svg {
      fill: currentColor;
    }
  }
`;

interface SocialProps {
  className?: string;
  style?: CSSProperties;
}

const Social: FC<SocialProps> = ({ className, style }) => {
  return (
    <SocialRoot className={className} style={style}>
      {config.socials.map(({ Icon, name, url }) => (
        <SocialListItem key={name}>
          <IconButton href={url} target="_blank" rel="noreferrer" title={name}>
            <Icon />
          </IconButton>
        </SocialListItem>
      ))}
    </SocialRoot>
  );
};

export default Social;
