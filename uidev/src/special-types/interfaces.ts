// we can define shape of an object using interface
interface Vehicle {
  wheels: number;
  color: string;
  electric: boolean;
}
const car: Vehicle = { wheels: 4, color: "white", electric: true };
const motorcycle: Vehicle = {
  wheels: 2,
  color: "red",
  electric: false,
};
const tractorTrailer: Vehicle = {
  wheels: 18,
  color: "blue",
  electric: false
};

//extending interface

interface EdibleThing {
  name: string;
  color: string;
}

interface Fruit extends EdibleThing {
  sweetness: number;
  calories?: number; // optional property
}

const apple: Fruit = { name: "apple", color: "red", sweetness: 80 };

console.log(apple.calories); // optional property,

// indexable properties
interface FavoriteFruitList {
  [fruitOrder: number]: string;
}

const favoriteFruit: FavoriteFruitList = [];
favoriteFruit[1] = "Apple";

const thirdPlace = 3;
favoriteFruit[thirdPlace] = "Strawberry";

interface ObjectsById {
  [id: string]: Fruit
}

const objById: ObjectsById = {
  '312313313': { name: "apple", color: "red", sweetness: 80 }
}

console.log(objById);
console.log(objById['312313313']);