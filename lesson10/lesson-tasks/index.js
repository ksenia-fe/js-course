'use strict';

//------------------------------ task 1 ------------------------------
// input: array
// output: array
const arr = [1.23, 3, 5 , 'fgh', Infinity, null, NaN];

// callback input: element
// callback output: boolean
// const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));
// const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));
// const getNaN = arr => arr.filter(el => Number.isNaN(el));
// const getNaNV2 = arr => arr.filter(el => isNaN(el));
// const getIntegers = arr => arr.filter(el => Number.isInteger(el));

// console.log(getFiniteNumbers(arr));
// console.log(getFiniteNumbersV2(arr));
// console.log(getNaN(arr));
// console.log(getNaNV2(arr));
// console.log(getIntegers(arr));
//------------------------------ task 2 ------------------------------
// input: array
// output: array
// const arr = ['12.4ldd', 12.456, 34, '  78f']

// const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));
// const getParsedIntegers2 = arr => arr.map(el => parseInt(el));
// const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
// const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

// console.log(getParsedIntegers(arr));
// console.log(getParsedIntegers2(arr));
// console.log(getParsedFloats(arr));
// console.log(getParsedFloatsV2(arr));
// //------------------------------ task 3 ------------------------------

// input: number
// output: array
// const num = 5.2563456;
// const multiRound = (num) => 
//   [Math.floor(num * 100) / 100,
//   Math.round(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   +num.toFixed(2)
//   ];

// console.log(multiRound(num));


// ------------------------------- task4 --------------------------

// input: array
// output: number
// const arr = [-3,5,90,-851];

// const getMaxAbsoluteNumber = (arr) => {
//   let max = -Infinity;

//   arr.forEach(el => {
//     if(Math.abs(el) > max){
//       max = Math.abs(el);
//     }
//   })

//   return max;
// }

// const getMaxAbsoluteNumber = arr => {
//   if((!Array.isArray(arr)) || arr.length === 0){
//     return null;
//   }else{
//     const absValues = arr.map(el => Math.abs(el));
//     return Math.max(...absValues);
//   }
// }

// console.log(getMaxAbsoluteNumber([]));




// const getRandomNumbers = (length, from, to) => {
//   if(Math.abs(to) - Math.abs(from) <= 1){
//     return null;
//   }else{
//     return randomCallback(Array(length),from,to);
//   }
// }
// // input:number, number
// // output: number
// function randomCallback(arr,start,end){
//   return arr
//   .fill()
//   .map(() => {
//     if(start > 0 && end > 0){
//       return Math.floor(Math.random() * (end - start) + start);
//     }else{
//       return Math.ceil(Math.random() * (end - start) + start);
//     }
//   })
// }

// console.log(getRandomNumbers(4,5,6));
