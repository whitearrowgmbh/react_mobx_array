import React from "react";
import ReactDOM from "react-dom";
import Compo from "./compo";
import Calc from "./calc";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Compo />
      <Compo />
      <br />
      <br />
      <Calc id={1} />
      <br />
      <Calc id={2} />
      <br />
      <Calc id={3} />
      <br />
      <Calc id={1} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
