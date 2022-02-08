interface Engine {
  name: string;
}
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  engine: Engine;
  getCost(): number;
}
interface Summarize {
  getSummary(): string;
}

function print(vehicle: Vehicle): void {
  console.log("name", vehicle.name);
  console.log("year", vehicle.year);
  console.log("broken", vehicle.broken);
  console.log("engine", vehicle.engine);
  console.log("getCost", vehicle.getCost());
}

function summarize(item: Summarize): void {
  console.log("summerizing");
  console.log(item.getSummary());
}

const vehicle = {
  name: "toyoya",
  year: 2020,
  broken: true,
  engine: {
    name: "bombardior"
  },
  getCost(): number { return 1000; },
  getSummary(): string {
    return this.name;
  }
};

const drink = {
  name: 'coca cola',
  aerated: true,
  getSummary(): string {
    return this.name;
  }
};

print(vehicle);
summarize(vehicle);
summarize(drink);
// both vehicle and drink have implemented an interface Summarize
