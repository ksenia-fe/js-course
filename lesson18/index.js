// const event = {
//   guests: [
//     { name: 'Ksyusha', age: 17, email: 'k@gmail.com' },
//     { name: 'Bob', age: 18, email: 'b@gmail.com' },
//   ],
//   message: 'Welcome to the party!',
//   getInvintations() {
//     return this.guests
//       .filter(el => el.age >= 18)
//       .map(({ name, email }) => ({
//         email,
//         message: `Dear ${name}! ${this.message}`,
//       }));
//   },
// };

// console.log(event.getInvintations());
// -------------------- task 2 --------------------
// const wallet = {
//   transactions: [1,4,786,-3],
//   getMax(){
//     return Math.max(...this.transactions);
//   },
//   getMin(){
//     return Math.min(...this.transactions);
//   }
// }
// --------------- task 3 -------------------------
// function sumOfSquares() {
//   return [...arguments].map(el => el ** 2).reduce((acc, el) => acc + el);
// }

// console.log(sumOfSquares(2, 3, 4));
// -------------------- task 4 --------------------------
// input: function
// output: function

// присвоить свойство calls(является массивом) функции withMemory
// в нём должны храниться массивы аргументов(= вызовы)
// функция из output должна запоминать все свои вызовы(в виде массивов) и записывать в calls
// * должна поддерживать функции с this

// const saveCalls = func => {
//   let calls = [];
//   return withMemory();
// };

// function test(a, b) {
//   return Math.sqrt(a * a + b * b);
// }

// const testWithMemory = saveCalls(test);
// testWithMemory(4, 2);
// testWithMemory(9, 1);

// testWithMemory.calls; // [ [4, 2], [9, 1] ]

// /* Поддержка функций с контекстом */

// const user = {
//   name: 'John',
//   sayHi() {
//     return this.name;
//   },
// };

// const methodWithMemory = saveCalls(user.sayHi);

// methodWithMemory.apply({ name: 'Tom' }); // 'Tom'

// methodWithMemory.calls; // [ [] ]
// last task
function test(a, b) {
  return (Math.sqrt(a ** 2 + b ** 2)).toFixed(2);
}

console.log(test(2, 4));
