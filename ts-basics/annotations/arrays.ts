const carMakers = ['ford', 'toyota', 'chevy']; // array type detected by type inference
const maker = carMakers[0]; // by inference maker will be of type string, we dont have to add it
//carMakers.push(100); // inference stops pushing incompatible values

carMakers.map((car: string): string => car.toUpperCase());