import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px blue;
  color: blue;
  width: 40%;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: auto;
  margin-bottom: 8px;
  padding: 1rem;
`;

export const DivTituloContent = styled.div`
  border: solid 2px blue;
  padding: 5px;
  border-radius: 10px;
  width: 90%;
  text-align: center;
  margin-bottom: 3px;
`;

export const TituloContent = styled.div``;

export const TextAreaContent = styled.textarea`
    margin: 2px;
    width: 90%;
    height: 20vh;
    resize: none; 
    overflow: hidden;
    color: grey;
`;
