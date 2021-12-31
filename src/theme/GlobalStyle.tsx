import { createGlobalStyle, css } from "styled-components";

import transitions from "./transitions";

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
const resetCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${resetCss}

  html {
    scroll-behavior: smooth;
  }

  :root {
    --border-radius: 6px;

    --color-bg: #fff;
    --color-bg-hover: rgba(0, 0, 0, 0.05);
    --color-divider: rgba(0, 0, 0, 0.12);
    --color-text-secondary: #7e7e7e;
    --color-text-primary: #1a1a1a;
  }

  :root.dark {
    --color-bg: #111319;
    --color-bg-hover: rgba(255, 255, 255, 0.05);
    --color-divider: rgba(255, 255, 255, 0.12);
    --color-text-secondary: #a9afc3;
    --color-text-primary: #fff;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text-secondary);
    stroke: var(--color-text-secondary);
    fill: var(--color-text-secondary);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-text-primary);
  }

  ${transitions}
`;

export default GlobalStyle;
