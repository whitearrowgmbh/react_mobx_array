import React from "react";
import store from "./store";
import { observer } from "mobx-react";

class CompoScaffold extends React.Component {
  onCounter1 = () => {
    store.items[0].counter += 1;
  };

  onCounter2 = () => {
    store.items[1].counter += 1;
  };

  render() {
    return (
      <div>
        <div>Hallo von Compo</div>
        <br />
        <div>{store.items[0].title}</div>
        <div>Counter = {store.items[0].counter}</div>
        <button onClick={() => this.onCounter1()} type="button">
          Counter 1 +
        </button>
        <br />
        <div>{store.items[1].title}</div>
        <div>Counter: {store.items[1].counter}</div>
        <button onClick={() => this.onCounter2()} type="button">
          Counter 2 +
        </button>
        <div>Clicks insgesamt: {store.countClicks}</div>
      </div>
    );
  }
}

export default observer(CompoScaffold);
//export default CompoScaffold;
