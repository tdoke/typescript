/*
interface allows us to 
1] define and reuse shape of an object
2] using extends we can define hierarchies using interfaces.

but using type alias we can
1] have one type and reuse it for object, function, etc.
2] have operations defined on type alias like (union, intersection, literal)
3] we can make an interface also a type alias.
*/

type FruitList = string[];

const fruitInstance1: FruitList = ["Apple", "Orange"];

// Writing type aliases doesn't create a new type; any value that 
// is compatible with the alias' type will be compatible with the alias. For example:

// type FruitList = string[];
interface IndexedFruitList {
  [index: number]: string;
}

const fruitInstance2: FruitList = ["Apple", "Orange"];
const otherFruitList2: string[] = fruitInstance2; // This works
const indexedFruitList2: IndexedFruitList = fruitInstance2; // This also works

type StringTree = {
  value: string;
  left?: StringTree;
  right?: StringTree;
};

// let myStringTree: StringTree = getStringTree();
// myStringTree.value; // string
// myStringTree?.left?.right?.left?.value; // string | undefined

// Interface or type?
// Interfaces support extension using the extends keyword, 
// which allows an Interface to adopt all of the properties of another Interface. 
// Because of this, Interfaces are most useful when you have hierarchies of type annotations, 
// with one extending from another.

// type aliases, on the other hand, can represent any type, including functions and Interfaces!

interface Fruit {
  name: string;
  color: string;
  sweetness: number;
}

type FruitType = Fruit;

type EatFruitCallback = (fruit: Fruit) => void;

/** 
 * When you find yourself writing the same type signature repeatedly, or if you 
 * want to give a name to a particular type signature, you want to use a type alias. 
 * type aliases will become more important as we explore more complicated type compositions, 
 * such as Union and Intersection types, Generics, and utility types. We'll be diving deeper 
 * into all of these in future sections.
 * 
*/