import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;
  &:disabled {
    background-color: #a38caa;
    border: 1px solid #86738b;
  }
  &:hover:disabled {
    opacity: 1;
    cursor: default;
  }
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
