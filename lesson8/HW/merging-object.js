'use strict';

// 1.learn requirements
// 2.create step by step algo(& input/output for functions(before functions(in types)))
// 3.draft solution & testing
// 4.refactoring & final testing --> final solution

const obj1 = {name: 'Vasya', age: 34};
const obj2 = {isMarried: true, age: 32};

const mergeObjectsV1 = (obj1,obj2) => {
  return Object.assign({},obj1,obj2);
}

const mergeObjectsV2 = (obj1,obj2) => {
  return Object.assign({},obj2,obj1);
}

const mergeObjectsV3 = (obj1,obj2) => {
  return {...obj1,...obj2};
}

const mergeObjectsV4 = (obj1,obj2) => {
  return {...obj2,...obj1};
}

console.log(mergeObjectsV1(obj1,obj2));
console.log(mergeObjectsV2(obj1,obj2));
console.log(mergeObjectsV3(obj1,obj2));
console.log(mergeObjectsV4(obj1,obj2));

