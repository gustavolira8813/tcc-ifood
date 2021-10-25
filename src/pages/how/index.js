import "./styles.js";
import { Container } from "./styles.js";
import computer from "../../assets/img/computador.png";
import computer1 from "../../assets/img/computador1.png";
import computer2 from "../../assets/img/computador2.png";
function How() {
  return (
    <>
      <Container>
        <h4>
          Quando o parceiro entra em contato e informa o desejo da Migração:
        </h4>

        <img src={`${computer1}`} alt="computador1" />

        <h4>Como encontrar o Documento de Auxílio no Weduka:</h4>

        <img src={`${computer}`} alt="computador" />

        <h4>
          Como fazer o Registro de Chamada no Salesforce e repassar o caso para
          N2:
        </h4>
        <img src={`${computer2}`} alt="computador" />
      </Container>
    </>
  );
}
export default How;
