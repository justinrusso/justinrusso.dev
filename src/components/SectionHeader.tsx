import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import AnimateInView from "./utils/AnimateInView";
import { transitionNames } from "../theme/transitions";

const StyledSectionHeader = styled.h2`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  white-space: nowrap;

  &:after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--color-divider);
  }
`;

const SectionHeader: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <AnimateInView
      as={StyledSectionHeader}
      transitionProps={{
        classNames: transitionNames.fadeUp,
      }}
    >
      {children}
    </AnimateInView>
  );
};

export default SectionHeader;
