import setas from "../../assets/img/setas.png";
import yout from "../../assets/img/yout.gif";
import hand from "../../assets/img/hand.gif";
import logo from "../../assets/img/logo.svg";
import "./style.js";
import { Container } from "./style.js";
function What() {
  return (
    <>
      <Container>
        <p>Vamos ver na prática como tudo funciona</p>
        <div className="youtube">
          <div>
            <a
              href="https://www.youtube.com/watch?v=8A_imL-UpZk"
              target="_blank"
            >
              <img src={`${yout}`} />
              <img className="hand" src={`${hand}`} />
            </a>
          </div>
          <img src={`${logo}`} />
        </div>
      </Container>
    </>
  );
}
export default What;
