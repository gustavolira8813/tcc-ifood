import { Route, Switch } from "react-router";
import MarketList from "../../components/marketList";
import Conditions from "../conditions";
import Modelo from "../modelo";
import Resume from "../resume";
import SalesForce from "../salesForce";
import "./style.js";
import { Container } from "./style.js";
import setas from "../../assets/img/setas.png";
import "./styles.css";
function Practice() {
  return (
    <>
      <h1 className="start">Market Place</h1>
      <Switch>
        <Route exact path="/practice">
          <MarketList />
          <Container>
            <div className="title title-one">
              <h2>MKP</h2>
            </div>
            <div>
              <img src={`${setas}`} alt="setas" />
            </div>
            <div className="title title-two">
              <h2>
                FULL <br />
                SERVICE
              </h2>
            </div>
          </Container>
        </Route>
        <Route exact path="/practice/comerciais">
          <Conditions />
        </Route>
        <Route exact path="/practice/salesforce">
          <SalesForce />
        </Route>
        <Route exact path="/practice/modelo">
          <Modelo />
        </Route>
        <Route exact path="/practice/resume">
          <Resume />
        </Route>
      </Switch>
    </>
  );
}
export default Practice;
