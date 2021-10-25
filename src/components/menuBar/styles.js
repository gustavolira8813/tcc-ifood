import styled from "styled-components";
import { Button } from "@mui/material";
export const Container = styled.div`
  background-color: red;
  display: flex;
  height: 55px;
  padding: 15px;
  justify-content: space-evenly;

  .atual {
    filter: brightness(1.5);
  }
  .gif {
    background-color: white;
  }
  img {
    height: 50px;
  }
  button:hover {
    filter: brightness(1.5);
    border: 2px solid black;
  }
`;
export const Buttom = styled(Button)`
  background: yellow;
  color: green;
`;
