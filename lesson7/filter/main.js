// both methods don't change array
// 1
// input: callback
// output: undefined
// const getSpecialNumbers = numbers => {
//   const result = numbers.forEach(num => {
//     if (num % 3 === 0) {
//       console.log(num);
//     }
//   });
// };

// getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// 2
// const getSpecialNumbers = numbers => {
//   return numbers.filter(num => {
//     return num % 3 === 0 ? true : false;
//   });
// };
// short way of 2
// const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);

// console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
