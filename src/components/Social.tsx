import { FC } from "react";
import styled from "styled-components";
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

  &:hover {
    transform: translateY(-3px);
    svg {
      color: var(--color-text-secondary);
      transition: all 0.3s ease;
    }
  }
  svg {
    fill: transparent;
    color: var(--color-text-secondary);
    width: 22px;
    height: 22px;
  }
`;

const Social: FC = () => {
  return (
    <SocialRoot>
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
