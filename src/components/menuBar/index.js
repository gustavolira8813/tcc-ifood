import { Button, ButtonGroup } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./styles";
import { Buttom, Container } from "./styles";
import logo from "../../assets/img/logoBranco.png";
import logoGif from "../../assets/img/logoGif.gif";
function MenuBar() {
  const history = useHistory();

  function handleClick(target) {
    history.push(target);
  }

  return (
    <>
      <Container>
        <img src={`${logo}`} />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Buttom
            variant="contained"
            color="error"
            onClick={() => handleClick("/group")}
          >
            Grupo
          </Buttom>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClick("/practice")}
          >
            O que é?
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClick("/how")}
          >
            Como tratar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClick("/what")}
          >
            Na prática
          </Button>
          <Button
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
