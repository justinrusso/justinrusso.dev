import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const ContainerRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContainerInner = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ContainerRoot>
      <ContainerInner>{children}</ContainerInner>
    </ContainerRoot>
  );
};

export default Container;
