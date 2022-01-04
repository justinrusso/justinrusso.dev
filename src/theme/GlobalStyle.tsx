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

    --color-text-primary: rgba(var(--color-base-text), var(--text-primary-opacity));
    --color-text-secondary: rgba(var(--color-base-text), var(--text-secondary-opacity));

    --font-sans: "Poppins", -apple-system, system-ui, sans-serif;
    --font-mono: "Fira Code", monospace;

    --text-primary-opacity: 0.87;
    --text-secondary-opacity: 0.6;

    --transition: all 200ms cubic-bezier(0.65, 0, 0.35, 1);
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
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text-secondary);
    stroke: var(--color-text-secondary);
    fill: var(--color-text-secondary);
    font-family: var(--font-sans);
    line-height: 1.3;
    font-size: 18px;
    font-weight: 400;
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
    font-family: var(--font-mono);
    line-height: 1.1;
    font-weight: 600;
    padding: 0px 0px 10px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover {
      color: var(--color-primary-main);
    }
  }

  .home-section {
    width: 100%;
    padding-bottom: 170px;
    padding-top: 120px;

    @media screen and (max-width: 991px) {
      padding-bottom: 140px;
      padding-top: 90px;
    }
  }

  ${transitions}
`;

export default GlobalStyle;
