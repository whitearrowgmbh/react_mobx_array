import {
  observable,
  decorate,
  autorun,
  computed,
  reaction,
  action
} from "mobx";

class storeScaffold {
  items = [
    {
      id: 1,
      title: "Item #1",
      counter: 0
    },
    {
      id: 2,
      title: "Item #2",
      counter: 0
    }
  ];

  calcs = [
    {
      type: 1,
      calc: {
        title: "Calc 1",
        breite: 100,
        laenge: 200,
        flaeche: 20000
      }
    },
    {
      type: 2,
      calc: {
        title: "Calc 2",
        breite: 50,
        laenge: 100,
        flaeche: 5000
      }
    },
    {
      type: 3,
      calc: {
        title: "Calc 3",
        breite: 10,
        laenge: 20,
        flaeche: 200
      }
    }
  ];

  title_suffix = "";

  get countClicks() {
    return this.items[0].counter + this.items[1].counter;
  }

  trackChanges_Calc0 = reaction(
    () => {
      return this.calcs[0].laenge * this.calcs[0].breite;
    },
    neueFlaeche => (this.calcs[0].flaeche = neueFlaeche)
  );

  setCalc = ({ id, laenge, breite }) => {
    let calc = this.calcs.find(c => c.id === id);

    calc.laenge = laenge;
    calc.breite = breite;
  };

  trackSuffix = reaction(
    () => {
      if (this.items[0].counter === this.items[1].counter)
        return " hat gleich viele clicks";
      if (this.items[0].counter > this.items[1].counter)
        return " hat mehr clicks";
      return " hat weniger clicks";
    },
    s => (this.items[0].title = "Item #1" + s)
  );

  logClicks = autorun(() => {});
}

decorate(storeScaffold, {
  items: observable,
  calcs: observable,
  setCalc: action.bound,
  countClicks: computed
});

let store = observable(new storeScaffold());
export default store;
