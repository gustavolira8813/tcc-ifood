import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 0;
    padding: 0;
  }
  img {
    height: 50vh;
    width: 50vw;
  }
  .colab {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .title {
    font-family: "Courier New", Courier, monospace;
  }
  .title-thanks {
    font-family: "Dancing Script", cursive;
    font-size: 10rem;
  }
`;
