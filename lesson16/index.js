// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }

// console.log(arr[4]());

//  -------------- hw task 1 TO REFACTOR!!! ----------
// input: number(length of array)
// output: array
// algo:
// 1 if parametr is not a number - return null
// 2 if there is no parameters - return empty array
// 3 return an arr with length = param, where each el is a func

// const createArrayOfFunctions = length => {
//   let arr = [];

//   if (isNaN(length) && length) {
//     return null;
//   } else if (length == null) {
//     return [];
//   }
//   arr = Array(length).fill();
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   return arr;
//   // .map(
//   //     (el, index) =>
//   //       (el[index] = function () {
//   //         return el;
//   //       }),
//   //   );
//   // return arr;
// };

// console.log(createArrayOfFunctions());

//  -------------- hw task 2 ----------
// let foo = 1;
// console.log(foo);

// function bar() {
//   if (!foo) {
//     let foo = 10;
//   }

//   return foo;
// }

// foo = bar();

// console.log(foo);

// export default foo;


