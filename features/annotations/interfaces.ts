interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `name is ${this.name}`;
  },
};

const drink1 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink1);
