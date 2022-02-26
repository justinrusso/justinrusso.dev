import { css } from "styled-components";
import { hslColors } from "./utils";

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

export type Elevation = 0 | 1 | 2;

/**
 * Generates the percentage of lightness for dark elevations
 * @param elevation
 */
const getElevationLightness = (elevation: Elevation): number => {
  let lightness;
  switch (elevation) {
    case 1: {
      lightness = hslColors.bg.dark.l + 1.5;
      break;
    }
    case 2: {
      lightness = hslColors.bg.dark.l + 3;
      break;
    }
    default:
      lightness = hslColors.bg.dark.l;
      break;
  }

  // Return the lightness, capped at 100
  return Math.min(lightness, 100);
};

export const elevation = (elevation: Elevation) => css`
  background-color: var(--color-bg);

  .dark & {
    background-color: hsl(
      ${hslColors.bg.dark.h},
      ${`${hslColors.bg.dark.s}%`},
      ${`${getElevationLightness(elevation)}%`}
    );
  }
`;
