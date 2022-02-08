// using generics we can enable same function to work with objects of different interfaces or types or classes.
function printVal<T>(val: T): void {
  console.log(val);
}

printVal<string>("test"); // passing string type
printVal<number>(34242); // passing number type

interface Bag {
  weight: number;
}

const bag: Bag = {
  weight: 400
};
printVal(bag); // passing instance of Bag interface

/** generic constraints */
// to allow function to work with objects of different interfaces or types or classes.
// only if they have expected properties(i.e constraints)
interface Printable {
  print(): void
}

function printValWithConstraints<T extends Printable>(val: T): void { 
  //here generic constraint is object passed to printValWithConstraints, must have print function on it.
  val.print();
}

const result: Printable = {
  print: () => console.log('good')
};
printValWithConstraints(result);
// printValWithConstraints(bag); print is missing in Bag type