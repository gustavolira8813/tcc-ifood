import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import logo2 from "../../assets/img/logo2.png";
import models from "../../assets/img/models.png";
function Modelo() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);
  return (
    <>
      {visible && <img className="all" src={`${logo2}`} />}
      <div className="models">
        <h1>Modelo</h1>
        <p>
          Parceiros Long Tail e Novo podem contratar o serviço direto na Vitrine
          de Serviços do Portal (parceiros KA e CE precisarão abrir um chamado),
          neste caso, o parceiro irá "descontratar" o atual Plano Entrega:
        </p>
        <img className="imgModels" src={`${models}`} />
        <Link to="/practice">Voltar</Link>
      </div>
    </>
  );
}
export default Modelo;
