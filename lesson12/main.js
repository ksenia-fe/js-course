'use strict';
// ----------------------------- task 1 ----------------------------
// input: string
// output: string

export const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  } else {
    return [...str].reverse().join('');
  }
};

// console.log(reverseString('john'));

// ----------------------------- task 2 ----------------------------
// input: array
// output: array

// algo
// 1 filer array (no elements with letters) +
// 2 trim every el in array +
// 3 .toFixed(2) every el
// 4 add $ sigh to every element +
// 5 return array
// const arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];

export const cleanTransactionsList = arr => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const filteredArr = arr.filter(el => +el);

    return filteredArr.map(el => {
      return '$' + (+el.toString().trim()).toFixed(2);
    });
  }
};

// console.log(cleanTransactionsList(23));
