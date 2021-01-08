//input number, number, number, ...
// output: number
//function multiply() => {
//  //console.log(arguments);
//  return (Object.values(arguments)).reduce(acc, el => el * acc);
//}
//rest operator
const multiply = (...args) => {
  //console.log(args);
  return (args).reduce(acc, el => el * acc);
}
console.log(multiply(5,10,1,5,6,8,0,2,2,4));//0
multiply(5);//5

//spread
const testArr = [3,4,4,23,32,32,32];
console.log(...testArr);

const testArrCopy = [...testArr];

function sum(a,b){
  return a + b;
}

sum(testArr[0], testArr[1]);
sum(...testArr);

let example = 1111;
