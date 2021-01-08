'use strict';
//            ДОБАВЛЕНИЕ СВОЙСТВ В ОБЪЕКТЫ РАЗНЫМИ СПОСОБАМИ

// 1.learn requirements
// 2.create step by step algo(& input/output for functions(before functions(in types)))
// 3.draft solution & testing
// 4.refactoring & final testing --> final solution


// algo
// 1.first function - to add a key with value to obj via [] ++++
// 2.second func - via Object.assign (change start obj) +++
// 3.third func - via Object.assign (not changing start obj) +++
//     (create a new obj) +
// 4.fourth func - via spread operator (not changing start obj) 
// 5.in each func return obj ++++

// input: Object
// oitput: Object
// ex. const transaction = {
//   value: 170
// }
// const result = addPropertyV1(user, 'currency', 'USD');
// console.log(result); // { value: 170, currency: 'USD' }

const obj = {};
const key = 'name';
const value = 'Ksenia';

const addPropertyV1 = (obj,key,value) =>{
  obj[key] = value;
  return obj;
}

const addPropertyV2 = (obj,key,value) =>{
  Object.assign(obj, {[key] : value});
  return obj;
}

function addPropertyV3 (obj, key, value){
  const copy = Object.assign({}, obj, {[key]:value});
  return copy;
}

const addPropertyV4 = (obj,key,value) =>{
  const clonedObj = {...obj, [key] : value};
  return clonedObj;
}

console.log(addPropertyV1(obj,key,value));
console.log(addPropertyV2(obj,key,value));
console.log(addPropertyV3(obj,key,value));
console.log(addPropertyV4(obj,key,value));