import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/img/logo1.png";
import sales1 from "../../assets/img/sales1.png";
import sales2 from "../../assets/img/sales2.png";
import "./style.css";
function SalesForce() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);
  return (
    <>
      {visible && <img className="all" src={`${logo}`} />}
      <div className="sales">
        <h2>COMO IDENTIFICAR NO SALESFORCE</h2>
        <h3>
          {" "}
          Acessando o Salesforce, na capa da conta o Modelo de negócio será
          Marketplace:
        </h3>

        <img className="imgSales" src={`${sales1}`} />
        <h3>
          Parceiros Marketplace também podem utilizar o serviço Sob Demanda.
          Nesse caso, no Salesforce o modelo de negócio será Marketplace e na
          aba Serviços teremos a informação de Produto Sob Demanda - Status
          Adquirido.
        </h3>
        <img className="imgSales" src={`${sales2}`} />
        <Link to="/practice">Voltar</Link>
      </div>
    </>
  );
}
export default SalesForce;
