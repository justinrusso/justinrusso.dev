import styled from "styled-components";

interface ButtonProps {
  color?: "primary" | "secondary" | "plain";
}

const Button = styled.button<ButtonProps>`
  text-decoration: none;
  color: var(
    ${(p) =>
      p.color === "plain" ? "--color-text-primary" : `--color-${p.color}-main`}
  );
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  border-radius: 6px;
  border: 2px solid
    rgba(
      var(
        ${(p) =>
          p.color === "plain"
            ? "--color-base-text"
            : `--color-base-${p.color}-main`}
      ),
      0.5
    );
  padding: 8px 35px 7px 35px;
  transition: all 0.3s ease;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  &:hover {
    background-color: rgba(
      var(
        ${(p) =>
          p.color === "plain"
            ? "--color-base-text"
            : `--color-base-${p.color}-main`}
      ),
      0.075
    );
    border-color: var(
      ${(p) =>
        p.color === "plain"
          ? "--color-text-primary"
          : `--color-${p.color}-main`}
    );
  }
`;

Button.defaultProps = {
  color: "plain",
};

export default Button;
