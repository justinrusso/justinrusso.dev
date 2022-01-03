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

    --color-base-primary-dark: 68, 0, 27;
    --color-base-primary-main: 115, 43, 65;
    --color-base-primary-light: 164, 87, 108;
    --color-base-secondary-dark: 64, 99, 116;
    --color-base-secondary-main: 109, 144, 163;
    --color-base-secondary-light: 157, 192, 212;
    --color-base-text: 0, 0, 0;
    
    --color-primary-dark: rgb(var(--color-base-primary-dark));
    --color-primary-main: rgb(var(--color-base-primary-main));
    --color-primary-light: rgb(var(--color-base-primary-light));
    --color-secondary-dark: rgb(var(--color-base-secondary-dark));
    --color-secondary-main: rgb(var(--color-base-secondary-main));
    --color-secondary-light: rgb(var(--color-base-secondary-light));

    --color-bg: #fff;
    --color-bg-hover: rgba(0, 0, 0, 0.05);
    --color-divider: rgba(0, 0, 0, 0.12);
    --color-scrollbar: rgba(0, 0, 0, 0.25);

    --color-text-primary: rgba(var(--color-base-text), 0.87);
    --color-text-secondary: rgba(var(--color-base-text), 0.6);
  }

  :root.dark {
    --color-base-primary-dark: 217, 84, 105;
    --color-base-primary-main: 226, 108, 129;
    --color-base-primary-light: 235, 147, 164;
    --color-base-secondary-dark: 85, 126, 147;

    --color-bg: #0d1b27;

    --color-bg-hover: rgba(255, 255, 255, 0.05);
    --color-divider: rgba(255, 255, 255, 0.12);
    --color-scrollbar: rgba(255, 255, 255, 0.25);

    --color-base-text: 255, 255, 255;
    --color-text-primary: rgba(var(--color-base-text), 1);
    --color-text-secondary: rgba(var(--color-base-text), 0.7);
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text-secondary);
    stroke: var(--color-text-secondary);
    fill: var(--color-text-secondary);
  }

  /* Scrollbar Styles */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-scrollbar) var(--color-bg);
  }
  *::-webkit-scrollbar {
    width: 12px;
  }
  *::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar);
    border: 3px solid var(--color-bg);
    border-radius: 10px;
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