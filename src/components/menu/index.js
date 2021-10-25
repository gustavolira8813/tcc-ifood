import { Link, useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  function handleClick(target) {
    history.push(target);
  }

  return (
    <>
      <div>
        <button onClick={() => handleClick("/")}>Home</button>
      </div>
      <div>
        <button onClick={() => handleClick("/salesforce")}>SalesForce</button>
      </div>
    </>
  );
}
export default Menu;
