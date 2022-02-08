// type annotations on primitive types
let apple: number = 5;
let speed: string = "apple";
let isEmpyt: boolean = true;
let nothing: null = null;
let nothingElse: undefined = undefined;

// type annotations on built in object types
let todaysDate: Date = new Date();

// type annotations on array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let booleans: boolean[] = [true, false, true];
// booleans.push(2);

// type annotations on class
class Car {
  name: string;
}
let car: Car = new Car();
console.log("car.name", car.name);

// type annotations on object literal
let point: { x: number; y: number } = {
  x: 1,
  y: 2
};

// type annotations on function
const add: (a: number, b: number) => number = (a, b) => a + b;
console.log('add result', add(1, 2));

// multiple types on a variable
let eitherOR: boolean | string;
eitherOR = true;
eitherOR = "true123";

const input = "{'x':10}";
const output: { x: number } = JSON.parse(input);
console.log("json.parse reeturn", output);
