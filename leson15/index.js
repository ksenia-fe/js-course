'use strict';
// --------------- task 1 ----------
// export const makeCounter = () => {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// };
// const counter1 = makeCounter();
// const counter2 = makeCounter();
// console.log(counter1()); // 0
// console.log(counter1()); // 1
// console.log(counter2()); // 0
// console.log(counter1()); // 2
// console.log(counter2()); // 1

// --------------- task 2 ----------

// const message = 'Have a good day!';

// const sendMessage = name => {
//   let greeting = 'Hi, ';

//   if (name) {
//     return greeting + name;
//   } else {
//     return message;
//   }
// };

// console.log(sendMessage());

// ------------ calculator fabric ---------

// const createCalculator = () => {
//   let result = 0;

//   const add = number => {
//     result += number;
//   };

//   const decrease = number => {
//     result -= number;
//   };

//   const reset = () => {
//     result = 0;
//   };

//   const getMemo = () => {
//     return result;
//   };

//   return {
//     add,
//     decrease,
//     reset,
//     getMemo,
//   };
// };

// const calculator = createCalculator();
// const calculatorNext = createCalculator();

// calculator.getMemo(); // 0

// calculator.add(3);

// calculator.getMemo(); // 3

// calculator.decrease(5);

// calculatorNext.add(5);

// calculatorNext.getMemo(); // 5

// calculator.getMemo(); // -2

// calculator.reset();

// calculator.getMemo(); // 0

// ----------- logger ------------

// const createLogger = () => {
//   let message;
//   let typeMes;

//   function warn(str) {
//     typeMes = { message: str, dateTime: new Date(), type: str };
//   }

//   function error(str) {
//     typeMes = { message: str, dateTime: new Date(), type: str };
//   }

//   function log(str) {
//     typeMes = { message: str, dateTime: new Date(), type: str };
//   }

//   function getRecords() {
//     loggers.sort((a, b) => b - a);
//   }

//   return [{ warn, error, log }];
// };

// const createLogger = () => {
//   let typeMes;

//   function warn(str) {
//     typeMes = { message: str, dateTime: new Date(), type: str };
//   }

//   function error(str) {
//     typeMes = { message: str, dateTime: new Date(), type: str };
//   }

//   function log(str) {
//     typeMes = { message: str, dateTime: new Date(), type: str };
//   }

//   function getRecords(mes) {
//     return [{ message, dateTime: new Date(), type: mes }];
//   }

//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// };

const createLogger = () => {
  const memory = [];

  const getRecords = input => {
    if (input === 'warn' || input === 'log' || input === 'error') {
      return memory.filter(el => el.type === input).sort((a, b) => b.dateTime - a.dateTime);
    }
    if (input && input !== 'warn' && input !== 'log' && input !== 'error') {
      return [];
    }
    return memory.sort((a, b) => b.dateTime - a.dateTime);
  };

  function warn(str) {
    memory.push({ message: str, dateTime: new Date(), type: 'warn' });
  }

  function error(str) {
    memory.push({ message: str, dateTime: new Date(), type: 'error' });
  }

  function log(str) {
    memory.push({ message: str, dateTime: new Date(), type: 'log' });
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
console.log(logger.getRecords());
logger.log('User logged in');
logger.log('User logged out');
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger.warn('User try to restricted page');
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
logger.error('Unexpected error on the site');
console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('smth else'));
// Обязательно покрывайте и отлаживайте ваше решение тестами перед проверкой на сайте
