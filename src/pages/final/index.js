import { Avatar } from "@mui/material";
import logo from "../../assets/img/logo.svg";
import "./styles.js";
import { Container } from "./styles.js";
import pessoa from "../../assets/img/pessoa.jpg";
function Final() {
  return (
    <>
      <Container>
        <h2 className="title">Pensou em comida, pensou: </h2>

        <img src={`${logo}`} alt="logo" />
        <h2 className="title-thanks">Obrigado!</h2>
      </Container>
    </>
  );
}
export default Final;
