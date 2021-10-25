import styled from "styled-components";

export const Main = styled.div`
  background-color: red;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  img {
    width: 50vw;
    height: 50vh;
  }
  .button {
    text-align: center;
    font-size: 42px;
    font-family: "Raleway", sans-serif;
    color: white;
    width: 350px;
    height: 100px;
    background-color: red;
    border-radius: 30px;
    /* text-shadow: 0px 5px hsl(220, 80%, 30%), 0px 10px 10px #0003; */
    box-shadow: 0px 0px 0px 15px hsl(330, 14%, 94%),
      0px 10px 0px 15px hsl(330, 10%, 63%), 0px 20px 20px 15px #0003;
    cursor: pointer;
    border-radius: 100px 30px 100px 30px;
  }

  .button p {
    margin-top: 20px;
    transform: rotate(-3deg);
  }

  .button:hover {
    animation: 0.8s morph ease infinite;
  }

  .button:hover p {
    animation: 0.8s rot ease infinite;
  }

  @keyframes morph {
    0% {
      border-radius: 100px 30px 100px 30px;
    }
    50% {
      border-radius: 30px 100px 30px 100px;
    }
    100% {
      border-radius: 100px 30px 100px 30px;
    }
  }

  @keyframes rot {
    0% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
`;
