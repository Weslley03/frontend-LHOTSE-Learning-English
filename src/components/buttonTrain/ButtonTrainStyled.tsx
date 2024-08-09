import styled from "styled-components";

export const ButtonTrain = styled.button`
  margin: auto;
  margin-top: 5px;
  padding: 5px;
  background-color: blue;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  transition: padding 0.3s, font-size 0.3s, background-color 0.3s;
  color: white;

  &:hover {
    padding: 8px;
    font-size: 16;
  }
`
