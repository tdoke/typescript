// Literal types represent exact values of JavaScript primitives. For example, strings can represent any string, but type literalString = "thisString" can only represent a string with the value of "thisString".

let fruitName1: "Apple" = "Apple";
// fruitName1 = "Banana"; // Type Error: Type '"Banana"' is not assignable to type '"Apple"'.

type OnlyDaysOfTheWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
