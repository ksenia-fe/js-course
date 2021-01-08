'use strict';

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    return arr.map(a => (a % 2 === 0 ? a + delta : a));
  }
};

console.log(increaseEvenEl([1, 2, 3, 4], 100));

// cloning array
const arr = [1, 2, 3];

const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let copy = arr.slice();
    return copy;
  }
};

console.log(cloneArr(arr));
