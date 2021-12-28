import styled from "styled-components";
import { HeroRoot } from "../home/Hero";

const Button = styled.button`
  text-decoration: none;
  color: var(--color-text-primary);
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  border-radius: 6px;
  border: 2px solid var(--color-text-secondary);
  padding: 8px 35px 7px 35px;
  transition: all 0.3s ease;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  &:hover {
    color: var(--color-bg);
    background-color: var(--color-text-primary);
    border-color: var(--color-text-primary);
  }

  ${HeroRoot} & {
    border-radius: 30px;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export default Button;
