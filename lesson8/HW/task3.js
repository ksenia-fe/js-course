'use strict';

const getKeys = (obj) => {
  console.log(Object.keys(obj).forEach(element => console.log(element)));
}

const user = {
  a: 12,
  b: 13,
  c: 56,
}

console.log(getKeys(user));