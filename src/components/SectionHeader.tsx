import styled from "styled-components";

const SectionHeader = styled.h2`
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

export default SectionHeader;
