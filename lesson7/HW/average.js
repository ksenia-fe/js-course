'use strict';

const arrAverage = arr => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const sum = arr.reduce(function (acc, num) {
      return acc + num;
    }, 0);
    return sum / arr.length;
  }
};

// refactored option 
const arrAverage = arr => {
  return null
    ? !Array.isArray(arr)
    : arr.reduce(function (acc, num) {
        return acc + num;
      }, 0) / arr.length;
};
console.log(arrAverage([2, 2, 4, 4]));

console.log(arrAverage([2, 5, 6, 3]));

// ??
const arr = [2, 34, 56, 89, 9, -2];

arr.copyWithin(0, 1, 3);
console.log(arr);
