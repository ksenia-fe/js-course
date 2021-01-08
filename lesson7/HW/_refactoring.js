'use strict';

const increaseEvenEl = (arr, delta) => {
  return !Array.isArray(arr) ? null : arr.map(a => (a % 2 === 0 ? a + delta : a));
};

console.log(increaseEvenEl([1, 2, 3, 4], 100));
// cloning array
const arr = [1, 2, 3];

const cloneArr = arr => {
  return !Array.isArray(arr) ? null : arr.slice();
};

console.log(cloneArr('hi'));

const arrAverage = arr => {
  return !Array.isArray(arr)
    ? null
    : arr.reduce(function (acc, num) {
        return acc + num;
      }, 0) / arr.length;
};

console.log(arrAverage([2, 2, 4, 4]));

const reverseArray = arr => {
  return !Array.isArray(arr) ? null : arr.slice().reverse();
};

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

const squareArray = arr => {
  return !Array.isArray(arr) ? null : arr.map(a => a ** 2);
};

console.log(squareArray([1, 2, 3, 4]));

const sum = arr => {
  return !Array.isArray(arr)
    ? null
    : arr.reduce(function (acc, element) {
        return acc + element;
      }, 0);
};

console.log(sum([2, 5, 6, 3, 0, 3, -1]));

// filtered array

const filterNames = (arr, text) => arr.filter(name => name.length > 5 && name.includes(text));

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));

// withdraw
const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  const count = balances[indexOfClient] - amount;

  return amount > balances[indexOfClient] ? -1 : count;
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, 0], 'User', 10));
