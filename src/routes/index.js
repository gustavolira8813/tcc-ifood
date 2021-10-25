import { Switch, Route } from "react-router-dom";
import SalesForce from "../pages/salesForce";
import Home from "../pages/home";
import MenuBar from "../components/menuBar";
import How from "../pages/how";
import Help from "../pages/help";
import What from "../pages/what";
import Final from "../pages/final";
import Practice from "../pages/practice";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/group">
        <MenuBar />
      </Route>
      <Route path="/how">
        <MenuBar />
        <How />
      </Route>
      <Route path="/practice">
        <MenuBar />
        <Practice />
      </Route>
      <Route path="/help">
        <MenuBar />
        <Help />
      </Route>
      <Route path="/what">
        <MenuBar />
        <What />
      </Route>
      <Route path="/final">
        <MenuBar />
        <Final />
      </Route>
    </Switch>
  );
}
export default Routes;
