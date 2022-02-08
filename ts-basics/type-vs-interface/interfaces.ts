// interface is contract between implementation and client of the implementation. cool thing is u can keep client code same and swap implementation at run time.
// TO DEFINE SHAPE OF AN OBJECT USE INTERFACE, TO DEFINE A PROPERTY OF OBJECT USE TYPE.
interface Employee {
  id: number;
  name: string;
  address: string;
  printDetails(): void;
}
// how to create object from interface
// 1] let a class implement interface and then create object
class Person implements Employee {
  constructor(public id: number, public name: string, public address: string) {}
  printDetails() {
    console.log(this.id, this.name, this.address);
  }
}
new Person(1, "Test", "test address").printDetails();
// when used with classes avoid having interface having both data and functions on it.
// to use with classes create interfaces that only have functions on it.
interface IMath { //interface
  add(a: number, b: number): number;
  substract(a: number, b: number): number;
}
class MathImpl implements IMath { // implementation
  add(a: number, b: number): number {
    return a + b;
  }
  substract(a: number, b: number): number {
    return a - b;
  }
}
//in client code
const mathsAPI: IMath = new MathImpl(); // replace MathImpl with some other implementaions at run time
mathsAPI.add(1, 2);
mathsAPI.substract(5, 2);


// 2] using json literal
interface ICalculator { // interface
  digits: number[]
  mathsApi: IMath
};

const calulator: ICalculator = { // implementation
  digits: [1,2,3,4],
  mathsApi: new MathImpl()
};

calulator.mathsApi.add(1,2); // client call

// code spots to replace with interface and impl. switch or ifs where type check happens if it is of a particular type
// some function is called on it. so tommorrow if u need to add one more type, calling code is not changed only new implementaion is added
/** 
 * function getSomething(object){
 * if(type(object) === something) object.getSettings()
 * if(type(object) === something) object.getSettings()
 * if(type(object) === something) object.getSettings()
 * }
 * 
 * interface ISettings {
 *  getSettings(): void
 * }
 * function getSomething(object: ISettings) {
 *  return object.getSettings();
 * }
*/