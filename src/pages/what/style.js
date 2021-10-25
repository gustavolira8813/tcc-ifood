import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    width: 200px;
  }
  div {
  }
  .title {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 50px;
    text-align: center;
    margin: 0;
  }
  .title-one {
    background-color: black;
    color: white;
  }
  .title-two {
    background-color: #dc2525d6;
    color: black;
  }
  h2 {
  }
`;
