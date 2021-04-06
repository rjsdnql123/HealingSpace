import styled, { createGlobalStyle } from "styled-components";
import { Button } from "react-bootstrap";
import AppleSDGothicNeoL from "./AppleSDGothicNeoL.ttf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "AppleSDGothicNeoL";
  src: local("AppleSDGothicNeoL"),
  url(${AppleSDGothicNeoL}) 
}

body {
  font-family: 'AppleSDGothicNeoL', sans-serif;
  text-align: center;
  max-width: 768px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #2c3e50;
}
`;

export const ChoiceButton = styled(Button)`
  width: 500px;
  margin: 5px;
  display: inline;
`;
