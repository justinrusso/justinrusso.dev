import styled, { keyframes } from "styled-components";
import { FC, useEffect, useState } from "react";

const introEnter = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const introExit = keyframes`
    0% {
        transform: scale(1);
    }

    25%,
    50% {
        transform: scale(1.25);
        opacity: 1;
    }

    100% {
        transform: scale(0);
        opacity: 0;
    }
`;

const IntroRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  background-color: var(--color-bg);

  svg {
    animation: 600ms ${introEnter} var(--easing) 100ms,
      400ms ${introExit} var(--easing) 1200ms;
    height: 6rem;
    opacity: 0;
    animation-fill-mode: both;
  }

  .cls-1 {
    fill: var(--color-secondary-main);
  }

  .cls-2 {
    fill: var(--color-primary-main);
  }
`;

interface IntroProps {
  onComplete: () => void;
}

const Intro: FC<IntroProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 1600);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <IntroRoot>
      {mounted && (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 697.28 1080"
        >
          <path
            className="cls-1"
            d="M7534.78,6962.24q0,121.59-76.08,196.47t-187.45,101.58l276.89,479.21h-120L7133.21,7276H6987.33V7739.5H6850.86v-1080H7128.5q200,0,303.14,76.47T7534.78,6962.24Zm-145.88,0q0-103.52-60-149t-184.7-45.5H6987.33V7169.3h156.86q116.06,0,180.39-47.45T7388.9,6962.24Z"
            transform="translate(-6850.86 -6659.5)"
          />
          <path
            className="cls-2"
            d="M7548.14,6659.5v709.72a474.06,474.06,0,0,1-18.9,131.91,337.85,337.85,0,0,1-62.46,119.57q-43.56,54-118.32,86.4t-186.53,32.4q-173.4,0-310.62-96.43l63.27-88.72q73.14,44,134.36,58.64t111.34,14.65q117.49,0,181.6-71T7406,7361.5V6769.05H6851.31V6659.5Z"
            transform="translate(-6850.86 -6659.5)"
          />
          <path
            className="cls-1"
            d="M7456.64,6769.05c44.7,48.74,67.07,120.11,67.07,200.62q0,121.59-76.09,196.47a376.32,376.32,0,0,1-44,37.13V6769.05Z"
            transform="translate(-6850.86 -6659.5)"
          />
        </svg>
      )}
    </IntroRoot>
  );
};

export default Intro;
