import styled, { createGlobalStyle } from "styled-components";
import { Button } from "react-bootstrap";

export const GlobalStyle = createGlobalStyle`
body {
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
