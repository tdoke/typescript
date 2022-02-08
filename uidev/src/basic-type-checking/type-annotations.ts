/** 
 * 2] type inference doesnt work when we are defining a variable before assigning a value to it.
verbalFruitCount, is of any type when it is declared and of string type when value is assigned to it.

*/
function getFruitBasketVerbalCount(fruitList: string[]) {
  let verbalFruitCount; // let verbalFruitCount: any
  if (fruitList.length > 5) {
    verbalFruitCount = "A lot of fruit.";
  } else {
    verbalFruitCount = "Some fruit.";
  }
  return verbalFruitCount;
}


// We need to add type annotations to tell TypeScript what type a variable should hold. 
// Adding explicit types can help us avoid using values in a way that would cause errors at runtime. 
// We do this by placing a colon after the variable declaration followed by the type.

let favoriteDessert: string;
// favoriteDessert = 6; // Type Error: Type 'number' is not assignable to type 'string'.
favoriteDessert = "Cheesecake";

// Notice that the types are lowercase. This is the case for string, number, boolean, 
// and most other primitive types. JavaScript has built-in objects for all of its types
//  which use capital case, including String, Number, Boolean, and Object. These are not 
//  the same as lowercase types which we use with TypeScript and we should almost never use 
//  the uppercase versions when adding type annotations.

// Notice that we haven't assigned any value to these variables. In JavaScript, 
// these variables have the value of undefined. In TypeScript, adding a type definition 
// tells TypeScript that our variable must be that type. If we try using it before that variable 
// is assigned a value, TypeScript will assume this is undesired behavior and give us an error.

let floralArrangement1: string;
// console.log(floralArrangement1); // Variable 'floralArrangement' is used before being assigned.

// If we actually do intend to use the value whether it is undefined or not, 
// we can use a non-null assertion to tell TypeScript that we don't care 
// if our variable is used before being assigned. It looks like an exclamation 
// point before the colon:

let floralArrangement!: string;
console.log(floralArrangement); // undefined

// Array types are defined using the square bracket ([]) syntax we saw earlier. 
// There is another syntax for defining arrays with angle brackets, but it's use is discouraged.

let ingredients: string[]; // use this syntax
let recipes: Array<string>; // don't use this syntax

// Object types can also be defined by placing a colon after the property names.

let menu: {
  courses: number;
  veganOption: boolean;
  drinkChoices: string[];
};

// Make sure you don't mistake these types for using object destructuring to 
// assign properties to new variable names. They may look similar, but in one case 
// we're creating a variable and in the other case we're adding type annotations.

menu = {
  courses: 3,
  veganOption: true,
  drinkChoices: ['water']
}

// These are renamed variables, not types.
let { courses: orderedFood, veganOption: hasVegan } = menu;


// One useful technique is putting a value with the any type into a variable with a defined type. 
// This restores TypeScript's type checking to that value. One place this might be necessary is when 
// performing network requests.

async function getFruitList() {
  const response = await fetch("https://example.com/fruitList");
  const fruitList = await response.json();
  const typeFruitList: string[] = fruitList;
  return typeFruitList;
}

// Of course, if we assign our any value to a typed variable, it's possible that the value doesn't 
// match the type. For example, if this API returned an object instead of an array, TypeScript would 
// still think that it's a string[], because that's the type we assigned it to. We would then run into 
// runtime type errors that TypeScript can't warn us about. We have to be extra careful in these situations
//  to make sure the types we assign actually represent the data that that our API returns.

