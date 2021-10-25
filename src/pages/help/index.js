import logo from "../../assets/img/logo.svg";
import "./styles.css";
import { useHistory } from "react-router-dom";
function Help() {
  const history = useHistory();
  return (
    <>
      <div className="help">
        <h1>Dúvidas?</h1>

        <img src={`${logo}`} />

        <div>
          <button className="button2" onClick={() => history.push("/final")}>
            Não?
          </button>
        </div>
      </div>
    </>
  );
}
export default Help;
