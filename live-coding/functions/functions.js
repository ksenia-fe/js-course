'use strict';

// function declaration
function getSenseOfLife(){
  return 42;
}

// function expression
const func = function getSenseOfLife(){
  return 42;
}

console.log(getSenseOfLife());

function sum(a,b){
  return a + b;
}
// test function(!)
const sumResult = sum(2,4);
console.log(sumResult);

function sumAge(a){
  console.log('i am' + a);
}
console.log(sumAge(34));

// arrow functions
const mult = (a,b) => a * b;

// test func(!)
console.log(mult(3,4));
console.log(func);

// const square = (a) =>{
//   return a ** 2;
// }
// =
const square = a => a ** 2;


const a = function s(a,b){
  return a + b;
}

console.log(a(3,4));

console.log(square(3));

const getMagicNumber = () => 17;
console.log(getMagicNumber());