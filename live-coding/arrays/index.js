'use strict';
/*  МУТИРУЮЩИЕ МЕТОДЫ МАССИВОВ  */

/* pop - удаляет последний элемент и везвращает его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

// const numbersList1 = [1, 2, 3, 4, 5];

// const lastNumber = numbersList1.pop();
// console.log(lastNumber);
// console.log(numbersList1);


/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push
// input:number
// ourput:number
// const numbersList2 = [1, 2, 3, 4, 5];

// const addedLastNumber = numbersList2.push(6);
// console.log(addedLastNumber);
// console.log(numbersList2);

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// input:none
// output: number
// const numbersList3 = [1, 2, 3, 4, 5];

// const firstNumber = numbersList3.shift();
// console.log(firstNumber);
// console.log(numbersList3);

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

// input: number
// output: number (length of array)
// const numbersList4 = [1, 2, 3, 4, 5];

// const addedFirstNumber = numbersList4.unshift(0);
// console.log('addedFirstNumber' + addedFirstNumber);
// console.log(numbersList4);



























/*  НЕМУТИРУЮЩИЕ МЕТОДЫ МАССИВОВ  */



// начальный массив
// const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// input: callback function, object(optional)
// ouyut: array
// const bigNumbers = anotherNumbersList.filter(el => el > 5);
// console.log(bigNumbers);

// option next
// const bigNumbers = anotherNumbersList.filter(function(el){
//   return el > 5;
// });
// console.log(bigNumbers);

// option next
// const bigNum = anotherNumbersList.filter(filterCallback);
// console.log(bigNum);
// // input: number, number(index), array
// // output: boolean
// function filterCallback(element){
//   if(element > 5){
//     return true;
//   }else{
//     return false;
//   }
// }
// если вызывать callback функцию сначала и объявлять её через константу,то бжует ощибка.так делать нельзя



// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций
// массива anotherNumbersList
// выведи evenPositions в консоль
// ???
// const evenPositions = anotherNumbersList.filter();
// console.log(evenPositions);

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из anotherNumbersList
// выведи squaredNumbers в консоль

// input: callback func, obj(optional)
// output: array
// const squaredNumbers = anotherNumbersList.map(el => el ** 2);
// console.log(squaredNumbers);

// callback map input: element, number(index), array
// callback map output: element
// function mapCallback(el)

// /* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в anotherNumbersList и выведи его в консоль

// const firstOdd = anotherNumbersList.find();
// console.log(firstOdd);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива anotherNumbersList



// callback func

/**
A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
**/

// input: number, number, function
// undefined: undefined
// function sum(from, to, printer) {
//   let sum = 0;
//   while(from < to){
//     sum += from;
//     from++;
//   }

//   printer(sum);
// }


// input: number
// output: undefined
// const printResult = function(res) {
//   console.log('Result is: ' + res);
// }

// sum(5,10,printResult);

// ----------------------------- 11-12-2020 ----------------------

const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль
// input: callback (el,index,araay / boolean)
// output: element
const findResult = numbersList.find(el => (el % 2))
console.log(findResult);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList
//  input: callback (el,ind,array / undefined)
//  output: undefined
// put your code here

const forEachRes = numbersList.forEach(el => {
  if (el > 0) {
       console.log(el);
  }
});


/* метод reduce */
// из кучи данных получить один результат
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева направо),
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce
//  input: callback(number(start),number,index,array/number(start)),number(start) (el,ind,array / undefined)
//  output: undefined
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
// 1opt
// const res = transactions.reduce((acc, el) =>{
//   if(el > 100){
//     return el + acc;
//   }else{
//     return acc;
//   }
// },0)

// console.log(res);
// 2opt
// const res = transactions.reduce((acc, el) =>{
//   return el > 100 ? el + acc : acc;
// },0)

// console.log(res);
// 3opt
const res = transactions.reduce((acc, el) => (el > 100 ? el + acc : acc),0)

console.log(res);

//put your code here

/* sort - отсортирует массив в заданом порядке МУТИРУЕТ*/

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList1 = [6, 20, 33, 43, 8];
// input: callback(number,number/number + or -(if +,to change if -<not to change))
//output: array

console.log(numbersList1.sort((a,b) => b - a));
console.log(numbersList1);

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

console.log([...numbersList2].sort((a,b) => b - a));
console.log(numbersList2.slice().sort((a,b) => b - a));
console.log(numbersList2);

//put your code here