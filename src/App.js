import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Menu from "./components/menu";
import Final from "./pages/final";
import MenuBar from "./components/menuBar";
import What from "./pages/what";
import How from "./pages/how";
import Help from "./pages/help";
import Home from "./pages/home";
import ButtonB from "./components/ButtonB";
function App() {
  return (
    <div className="Ap">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
