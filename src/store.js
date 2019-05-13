import { observable, decorate, autorun, computed, reaction } from "mobx";

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

  title_suffix = "";

  get countClicks() {
    return this.items[0].counter + this.items[1].counter;
  }

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
  countClicks: computed
});

let store = observable(new storeScaffold());
export default store;
