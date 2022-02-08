class Vehicle {
  constructor(public name: string, public price: number) {}
  private id: number = 1222; // private members accessible only within class functions

  getSummary(): string { // methods are public by default, u can make them private or protected
    console.log('reading private id', this.id);
    return this.name;
  }
};

const vehicle = new Vehicle('test', 50000);
console.log(vehicle.getSummary());
/*
 if getSummary is marked protected, in above line we get error
  Property 'getSummary' is protected and only accessible within class 'Vehicle' and its subclasses.ts(2445)
 if getSummary is marked private, in above line we get error
  Property 'getSummary' is private and only accessible within class 'Vehicle'.ts(2341)
  if getSummary marked as public, then it can be accessed everywhere
  so for both functions and member variables, accessibility public > protected > private
*/

// console.log(vehicle.id); // Property 'id' is private and only accessible within class 'Vehicle'.ts(2341)
