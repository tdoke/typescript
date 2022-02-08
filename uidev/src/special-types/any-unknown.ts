// any gives you the greatest flexibility, but absolutely no type safety, 
// so it's best to avoid any unless it is absolutely necessary. Using unknown doesn't give you
// much flexibility, but it does maintain TypeScript's type safety guarantee, and encourages you
// as the developer to add the necessary checks to narrow your value's type to something more useful.

// As a general rule of thumb, prefer unknown over any and use type narrowing to determine 
// a more accurate type.

const unknownString: unknown = "What am I?";
// let stringValue: string = unknownString; // Type Error: Type 'unknown' is not assignable to type 'string'.

const unknownNumber: unknown = 27;
// let theAnswer = 15 + unknownNumber; // Type Error: Operator '+' cannot be applied to types 'number' and 'unknown'.

// type narrowing for unknown
if (typeof unknownString === 'string') {
  let stringValue: string = unknownString;
}

if (typeof unknownNumber === "number") {
  let theAnswer = 15 + unknownNumber;
}

// TypeScript understands that within that if statement, our unknownNumber 
// variable is actually a number.

// We'll learn about more methods of type narrowing in future lessons.

