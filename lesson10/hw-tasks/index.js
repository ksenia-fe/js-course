'use sctrict';


//------------------------------ task 1 ------------------------------

// input: array
// output: number

// algo
// 1 - calculate sum of elements of array
// 2 - round the sum (2)  toFixed(2)
// 3 - floor it
// 4 - return result
// const arr = [1, 34, 2.3456];

// const getTotalPrice = arr => {
//   const sum = arr.reduce(function(acc, num){
//     return acc + num;
//   },0);

//   return ('$' + (Math.floor(sum * 100)) / 100);
// }

// console.log(getTotalPrice(arr));

//------------------------------ task 2 ------------------------------
// input: number(arr.length) number(from) number(to)
// output: array

// algo
//1 - if we haven't int numbers - return null (if between from & to there are no ints)
//2 - create arr with length
//3 - put random numbers in arr depending on 'from' & 'to'

// const getRandomNumbers = (length, from, to) => {
//   if(Math.abs(to) - Math.abs(from) < 1){
//     return null;
//   }else{
//     return Array(length).fill(parseInt(randomCallback(from,to)));
//   }
// }
// // input:number, number
// // output: number
// function randomCallback(start,end){
//   if(start > 0 && end > 0){
//     return Math.random() * Math.floor(end - start) + Math.floor(start);
//   }else{
//     return Math.random() * Math.ceil(end - start) + Math.ceil(start);
//   }
// }

// function getRandomNumbersV2(length, from, to) {
//   if(Math.abs(to) - Math.abs(from) <= 1){
//     return null;
//   }else{
//     return getRandomNumbers(length, from, to)
//   }
// }
// function getRandomNumbers(length, start, end) {
//   return Array(length)
//     .fill()
//     .map(() =>{
//       if(start > 0 && end > 0){
//         return Math.floor(Math.random() * (end - start)) + start;
//       }else{
//         return Math.ceil(Math.random() * (end - start)) + start;
//       }
//     });
// }
// console.log(getRandomNumbers(3,4,5));

function getRandomNumbersV2(length, from, to) {
  if(Math.abs(to - end) <= 1){
    return null;
  }else{
    return getRandomNumbers(length, from, to)
  }
}
function getRandomNumbers(length, start, end) {
  if(start > 0 && end > 0){
    return Array(length).
    fill().
    map(el => Math.random() * Math.floor(end - start) + Math.floor(start));
  }
  return Array(length).
  fill().
  map(el => Math.random() * Math.ceil(end - start) + Math.ceil(start));
}
console.log(getRandomNumbers(3,4,5));

// задача "Массив случайных чисел"
// Нужно применять разное округление 
// (Math.ceil или Math.floor) в зависимости от того, 
// число положительное или отрицательное
//------------------------------ task 3 ------------------------------
// input: number, number(of numbers after ,)
// output: array

// const superRound = (num, afterDot)=> [(Math.floor((num)* 10 ** afterDot) / 10 ** afterDot),
//           (Math.round((num)* 10 ** afterDot) / 10 ** afterDot),
//           (Math.ceil((num)* 10 ** afterDot) / 10 ** afterDot),
//           (Math.trunc((num)* 10 ** afterDot) / 10 ** afterDot),
//           +num.toFixed(afterDot)];

// console.log(superRound(12.3456, 3));