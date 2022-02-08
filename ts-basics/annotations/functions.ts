const add = (a: number, b: number): number => a + b;
// const result: string = add(2,3);
console.log(add(1, 2));

function divide(a: number, b: number): number {
  return a / b;
}

console.log("divide", divide(4, 1));

function logger(message: string): void {
  console.log(message);
}

logger("hello, there is error in my life");

const log = {
  date: new Date(),
  message: "hellloe"
};
function printLog({ date, message }: { date: Date; message: string }): void {
  console.log(date, message);
}

printLog(log);

