import { useHistory } from "react-router-dom";
import logo from "../../assets/img/logoBranco.png";
import "./styles.js";
import { Main } from "./styles.js";
function Home() {
  const history = useHistory();
  return (
    <>
      <Main>
        <div>
          <img src={`${logo}`} alt="logo" />
        </div>
        <div>
          <button className="button" onClick={() => history.push("/group")}>
            <p>Let's Go</p>
          </button>
        </div>
      </Main>
    </>
  );
}

export default Home;
