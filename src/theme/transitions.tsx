import { css } from "styled-components";

export const transitionDurations = {
  fade: 500,
};

export const transitionNames = {
  fadeLeft: "fade-left",
  fadeRight: "fade-right",
  fadeUp: "fade-up",
  fade: "fade",
};

const transitions = css`
  .${transitionNames.fadeLeft},
    .${transitionNames.fadeRight},
    .${transitionNames.fadeUp} {
    transition: opacity ${transitionDurations.fade}ms ease,
      transform ${transitionDurations.fade}ms ease;
  }

  .${transitionNames.fadeLeft}-enter {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }

  .${transitionNames.fadeRight}-enter {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }

  .${transitionNames.fadeUp}-enter {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  .${transitionNames.fadeLeft}-enter-active,
    .${transitionNames.fadeRight}-enter-active,
    .${transitionNames.fadeUp}-enter-active {
    opacity: 1;
    transform: translateZ(0);
  }

  .${transitionNames.fade} {
    transition: opacity ${transitionDurations.fade}ms var(--easing);
  }

  .${transitionNames.fade}-enter {
    opacity: 0;
  }

  .${transitionNames.fade}-enter-active, .${transitionNames.fade}-enter-done {
    opacity: 1;
  }

  .${transitionNames.fade}-exit {
    opacity: 1;
  }
  .${transitionNames.fade}-exit-active, .${transitionNames.fade}-exit-done {
    opacity: 0;
  }
`;

export default transitions;
