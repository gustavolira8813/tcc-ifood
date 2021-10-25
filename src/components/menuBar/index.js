import { Button, ButtonGroup } from "@mui/material";
import { useHistory } from "react-router";
import "./styles";
import { Buttom, Container } from "./styles";
import logo from "../../assets/img/logoBranco.png";
import logoGif from "../../assets/img/logoGif.gif";
import { useState } from "react";

function MenuBar() {
  const history = useHistory();
  const [atual, setAtual] = useState("/group");
  function handleClick(target) {
    history.push(target);
    setAtual(target);
  }

  return (
    <>
      <Container>
        <img onClick={() => handleClick("/")} src={`${logo}`} />
        <ButtonGroup
          className="btnGroup"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Buttom
            className={atual === "/group" && "atual"}
            variant="contained"
            color="error"
            onClick={() => handleClick("/group")}
          >
            Grupo
          </Buttom>
          <Button
            className={atual === "/practice" && "atual"}
            variant="contained"
            color="error"
            onClick={() => handleClick("/practice")}
          >
            O que é?
          </Button>
          <Button
            className={atual === "/how" && "atual"}
            variant="contained"
            color="error"
            onClick={() => handleClick("/how")}
          >
            Como tratar
          </Button>
          <Button
            className={atual === "/what" && "atual"}
            variant="contained"
            color="error"
            onClick={() => handleClick("/what")}
          >
            Na prática
          </Button>
          <Button
            className={atual === "/help" && "atual"}
            variant="contained"
            color="error"
            onClick={() => handleClick("/help")}
          >
            Ajuda
          </Button>
        </ButtonGroup>
        <img className="gif" src={`${logoGif}`} />
      </Container>
    </>
  );
}
export default MenuBar;
