import { Link } from "react-router-dom";
import "./style.js";
import { Container } from "./style.js";
import gordinho from "../../assets/img/gordinho.png";
function MarketList() {
  return (
    <>
      <Container>
        <ul>
          <li>
            <Link to="/practice/comerciais">Condições Comerciais;</Link>
          </li>
          <li>
            <Link to="/practice/salesforce">
              Como identificar no SalesForce;
            </Link>
          </li>

          <li>
            <Link to="/practice/modelo">
              Como o parceiro solicita esse modelo;
            </Link>
          </li>
          <li>
            <Link to="practice/resume">Resumo do serviço;</Link>
          </li>
        </ul>
        <img src={`${gordinho}`} />
      </Container>
    </>
  );
}
export default MarketList;
