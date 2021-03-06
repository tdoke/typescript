// void represents the absence of any type. It's often used to indicate that a function doesn't return anything.

function sendRequestAndForget() {
  fetch("https://example.com/addUser", { method: "POST" });
}

const output1 = sendRequestAndForget(); // const output: void;

// It's common to use this type when annotating callback functions that don't return.

function performRequest(requestCallback: () => void) {
  // implementation goes here
}

// It's also a good idea to annotate the return type of your functions with void when you know that the function won't return anything. This will give you a warning if you ever try to return something on accident.

// Using it outside the context of function return values isn't very helpful, since you can't assign anything to void variables. Stick to using it with functions that return nothing.

// never
// We've seen what happens when we have a function that doesn't return anything. What about functions that can never return anything.

function exception() {
  throw new Error("Something terrible has happened");
}

const output2 = exception(); // const output: void;

function loopForever() {
  while (true) {}
}

// TypeScript has inferred the type of these functions as void. However, that's not totally accurate. Our first function will never return because of the throw statement, and the second has an infinite loop. TypeScript gives us a type which lets us be more specific about this function's return type.

function exception1(): never {
  throw new Error("Something terrible has happened");
}

const output3 = exception1();
// const output: never;

function loopForever1(): never {
  while (true) {}
}

const loopOutput = loopForever();
// const loopOutput: never;

// Instead of representing the absence of a type like void, never represents a value that can never occur. If we every try to access or modify a never variable, TypeScript will give us a warning.

// Usually we have to explicitly annotate our function with the never type. There is one case where TypeScript will correctly infer the return type as never: returning the results of a never function.

function implicitNever() {
  return exception();
}
const output = implicitNever(); // const output: never;

// There are other circumstances where we might see never show up. For example, we'll see never again when looking at Intersection types, and later on when working with Conditional types. Just remember that never represents a type that will never exist at runtime.

