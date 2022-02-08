let fruitName = 'Banana';

//fruitName = 10; 
//Type '10' is not assignable to type 'string'.ts(2322)

let fruit = {
  name: "Banana",
  color: "yellow",
  sweetness: 80,
  isRipe: true,
};
// on hover fruit infered as
/** 
 * let fruit: {
    name: string;
    color: string;
    sweetness: number;
    isRipe: boolean;
}
 * 
*/

const days = ['Monday', 'Tuesday']; // on hover days infered as const days: string[]

const daysWithPrefix = days.map((day) => {
  return 'test-'+day;
});
// const daysWithPrefix: string[]

