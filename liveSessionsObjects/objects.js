'use strict';
// 1.learn requirements
// 2.create step by step algo(& input/output for functions(before functions(in types)))
// 3.draft solution & testing
// 4.refactoring & final testing --> final solution

// input: string
// output: string
let message = 'Just learn it';

const sendMessage = (name) => {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}! Your ${sender}`);
}

function setMessage(text) {
   return message = text;
}


setMessage('Good job');
sendMessage('Ann');

// ----------------------- task2 ------------------
// input: string
// output: string
 function createMessenger(){
    let message = 'Just learn it';
    let sender = 'Gromcode';

    const sendMessage = (name) => {

    console.log(`${name}, ${message}! Your ${sender}`);
}

    function setMessage(text) {
    message = text;
}
    function setSender(whoSent) {
    sender = whoSent;
}
    return {
        sendMessage,
        setMessage,
        setSender,  
    }
}

const messanger1 = createMessenger();
messanger1.sendMessage('Bob');
messanger1.setMessage('Hello');

const messanger2 = createMessenger();
messanger2.sendMessage('Tom');
messanger2.setSender('Mentor');
messanger1.sendMessage('Ann');
messanger2.sendMessage('Tom');

// --------------------------------- 16-12-2020 ----------------------

// input: object, object
// output: object


const obj1 = {
    name: 'Tom',
    age: 17,
};
const obj2 =  {
    name: 'Bob',
    student: false,
};

const mergeObjectsV1 = (obj1,obj2) => Object.assign({},obj1,obj2);

const mergeObjectsV2 = (obj1,obj2) => Object.assign({},obj2,obj1);

// // priority method

const mergeObjectsV3 = (obj1,obj2) => ({...obj1,...obj2});

const mergeObjectsV4 = (obj1,obj2) => ({...obj2,...obj1});

console.log(mergeObjectsV1(obj1,obj2));// { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1,obj2));// { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1,obj2));// { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1,obj2));// { name: 'Tom', age: 17, student: false }

let test1 = 20;
let test2 = test1;
console.log(tes1,test2);

const obj1 = 
{
    name: 'Tom',
    age: 50,
}

const obj2 = 
{
    name: 'Tom',
    age: 17,
}

 obj2 = obj1;
console.log(obj1,obj2);

const transaction = {
    currency: 'USD',
    value: 170,
    operation: 'sale',
    agent: {
      country: 'Ukraine',
      company: 'NYSE'
    },
    'operation time': 1584029990001
  };
  
  /* выведите в консоль значение свойства 'currency' с помощью точки */
  console.log(transaction.currency);
  /* выведите в консоль значение свойства 'value' с помощью квадратных скобок */
  console.log(transaction['value']);
  const key = 'operation';
  /* выведите в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
  console.log(transaction[key]);
  /* выведите в консоль значение свойства 'company' используя квадратные скобки */
  console.log(transaction.agent['company']);
  /* выведите в консоль значение свойства 'country' используя точку */
  console.log(transaction.agent.country);
  /* выведите в консоль значение свойства 'operation time' используя квадратные скобки */
  console.log(transaction['operation time']);

  const userData = {};
  const userId = 'name';

  const addPropertyV1 = (userId,userData) => {
    userData.id = userId;
    return userData;
  }

  const addPropertyV2 = (userId,userData) => {
    Object.assign(userData, {id : userId});//если бы тут id было в квадратных скобках,то id-это переменная.сейчас это само свойство
    return userData;
  }

  const addPropertyV3 = (userId,userData) => {
    const newObj = Object.assign({},userData, {id : userId});
    return newObj;
  }

  const addPropertyV4 = (userId,userData) => {
    const clonedObj = {...userData, id : userId};
    return clonedObj;
  }

    console.log(addPropertyV1(userId,userData));
    console.log(addPropertyV2(userId,userData));
    console.log(addPropertyV3(userId,userData));
    console.log(addPropertyV4(userId,userData));

  // ------------------------ OBJECTS --------------
  const obj = {
  'Katya' : 18,
  'Tom' : 8,
  'Andrew' : 17,
  'Bob' : 34,
  'Sam' : 75,
  'Daniel' : 3,
}

console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));


// ?????
const pickProps = (obj, arr) => {
  let result = {};

  const included = Object.keys(obj)
    .filter(key => !arr.includes(key));

  result = included
    .reduce((el, index) =>
     (delete el[index], el),{...obj});

  return result;
}

const res = pickProps( {name: 12, age: 34, city: 'NY'}, ['name', 'city']);
console.log(res); // => {name: 12, city: 'NY'}
  
// access to key properties of object
const user = {
  name: 'Tom',
  age : 32,
  isWorking : true,
}

const {isWorking} = user;
console.log({isWorking});

console.log(user.isWorking);

const { name: second } = user; //? changed name to second
const { isMarried = true } = user; //added property
const { name } = user; //Tom 
const {age = 'Sam', ...restProps} = user; //rest of properties
console.log(restProps);

const player = {
  secondName : 'Vasya',
  ...restProps,
}

console.log(player);

// function a(a,b,c, ...rest){
//   return rest;
// }

// console.log(a(2,4,5,6,7,8,9));