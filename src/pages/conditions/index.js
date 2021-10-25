import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/conditions.png";
import plano from "../../assets/img/plano.png";
import entrega from "../../assets/img/entrega.png";
import "./style.css";
function Conditions() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);
  return (
    <>
      {visible && <img className="all" src={`${logo}`} />}
      <div className="conditions">
        <h1>Condições</h1>
        <div className="central">
          <div>
            <h3>
              Nesse modelo todas as entregas são realizadas pelo restaurante.
            </h3>
            <img src={`${entrega}`} alt="compras" />
          </div>
          <div>
            <img src={`${plano}`} />
          </div>
        </div>
        <Link to="/practice">
          <button className="btnB">Voltar</button>
        </Link>
      </div>
    </>
  );
}
export default Conditions;
