let fruitNames = ["Apple", "Banana"];

function alternateUppercase(name: string, index: number) {
  if (index % 2 === 0) {
    return name.toUpperCase();
  }
  return name;
}

function doubleNumber(num: number) {
  return num * 2;
}

//  const alternatedFruitNames = fruitNames.map(doubleNumber); // ts error

let fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" }
];
function getFruitName({ name }: { name: string }) { // passing object to a function and adding its type
  return name;
}

const getNames = fruits.map(getFruitName);

// Return Values
// We can also add types for the value that a function returns.

function headsOrTails(): boolean {
  return Math.random() > 0.5;
}

// This function most definitely returns a boolean value. Most of the time TypeScript will 
// infer the return type by what is returned, but adding an explicit return type makes it so 
// we can't accidentally return a value of the wrong type.

// For arrow functions, the type is placed before the arrow.

const headsOrTailsArrowFn = (): boolean => {
  return Math.random() > 0.5;
};

// Async Functions
// By definition, an async function is a function which returns a JavaScript Promise. Just like arrays, 
// there is a special syntax for defining the type of the value which is wrapped in a promise. 
// We place the wrapped type in angle brackets and put Promise in front of it.

// async function getFruitListFromAPI(): Promise<string[]> {
//   const response = await fetch("https://example.com/fruit");
//   const fruitList: string[] = await response.json();
//   return fruitList;
// }

// If we were to try annotating this function with just string[], 
// TypeScript would warn us that we need to use the Promise type wrapper.


// Function Type Expressions
// What do we do when we have a function that takes another function (often called a callback) 
// as a parameter? For example, if I were to create a type definition for an array map function, I would 
// have to pass a callback function as one of the parameters.

function mapNumberToNumber(list: number[], callback: any) {
  // (parameter) callback: any
  // Implementation goes here
}

// Our callback parameter has an any type, which means we could call it as a function if we wanted to. 
// However, we want to avoid any, since using it leads to less type safety.

// We can create a function type annotation using a special syntax. It might look like an arrow function, 
// but it's defining a type.

function mapNumberToNumber1(
  list: number[],
  callback: (item: number) => number,
) {
  // (parameter) callback: (item: number) => number
  // Implementation goes here
}

// Then, when we call the function, TypeScript can check the callback that we pass in to make 
// sure it matches the type signature we used.

const doubledNumbers = mapNumberToNumber(
  [1, 2, 3],
  (num: number) => num * 2,
);

// In this case, num is inferred to be a number because TypeScript is able to determine 
// the type from the type annotation we added to the callback parameter.

// DEFAULT PARAMETERS
// We can also mark parameters as optional by giving them a default value. TypeScript will 
// infer the type of the parameter from the default value.

function logOutput(message: string, yell = true) {
  if (yell) {
    console.log(message.toUpperCase());
    return;
  }
  console.log(message.toUpperCase());
}

logOutput("Hey! Listen!"); // "HEY! LISTEN!"


// Rest Parameters
// When we aren't sure how many parameters will be passed to a function, we can use the ... rest syntax, 
// which gives us all of the parameters in a list. If all of the extra parameters are the same type, 
// we can easily add an annotation to the spread parameters.

function logManyOutput(...messages: string[]) {
  messages.forEach((message) => {
    logOutput(message);
  });
}

