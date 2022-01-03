import { css } from "styled-components";

export const underlinedLink = css<{ underlineColorVar?: string }>`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: var(
      ${(p) => p.underlineColorVar || "--color-primary-main"}
    );
    transition: width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;
