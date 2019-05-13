import React from "react";
import store from "./store";
import { observer } from "mobx-react";

class Calc extends React.Component {
  onClick = id => {
    let breite = (store.calcs[id - 1].calc.breite -= 10);
    let laenge = (store.calcs[id - 1].calc.laenge += 10);

    store.setCalc({ id: id - 1, breite, laenge });

    // geht nicht (löst kein Tracking aus)
    //store.calcs[id - 1].calc.breite -= 10;
    //store.calcs[id - 1].calc.laenge += 10;
  };

  render() {
    const id = this.props.id;

    return (
      <div>
        Calc #{id}:<div>Titel: {store.calcs[id - 1].calc.title}</div>
        <div>Länge: {store.calcs[id - 1].calc.laenge}</div>
        <div>Breite: {store.calcs[id - 1].calc.breite}</div>
        <div> --> Fläche: {store.calcs[id - 1].calc.Fläche}</div>
        <button onClick={() => this.onClick(id)}>Change values</button>
      </div>
    );
  }
}

export default observer(Calc);
