import { css } from "styled-components";

export const transitionDurations = {
  fade: 500,
};

export const transitionNames = {
  fadeRight: "fade-right",
  fade: "fade",
};

const transitions = css`
  .${transitionNames.fadeRight} {
    transition: opacity ${transitionDurations.fade}ms ease,
      transform ${transitionDurations.fade}ms ease;
  }

  .${transitionNames.fadeRight}-enter {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }

  .${transitionNames.fadeRight}-enter-active {
    opacity: 1;
    transform: translateZ(0);
  }

  .${transitionNames.fade} {
    transition: opacity ${transitionDurations.fade}ms ease;
  }

  .${transitionNames.fade}-enter {
    opacity: 0;
  }

  .${transitionNames.fade}-enter-active {
    opacity: 1;
  }
`;

export default transitions;