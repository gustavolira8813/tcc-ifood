import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo3 from "../../assets/img/logo3.png";
import resume from "../../assets/img/resume.png";
import "./style.css";
import local from "../../assets/img/local.png";
function Resume() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);
  return (
    <>
      {visible && <img className="all" src={`${logo3}`} />}
      <div className="resume">
        <h1>Resumo do Serviço</h1>
        <img className="imgResume" src={`${resume}`} />

        <small>*Há exceções para KA, CE e Exclusivos</small>
        <small>
          **Caso o parceiro venda menos do que R$1800,00, a mensalidade não é
          cobrada.
        </small>
        <img className="imgLocal" src={`${local}`} />
        <Link to="/practice">Voltar</Link>
      </div>
    </>
  );
}
export default Resume;
