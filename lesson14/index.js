'use strict';

// -------------------------- task 1 --------------

// input: string
// output: string
// let message = 'Just learn it';

// export const sendMessage = (name) => {
//     const sender = 'Gromcode';
//     console.log(`${name}, ${message}! Your ${sender}`);
// }

// export function setMessage(text) {
//    return message = text;
// }

// sendMessage('Ann');
// console.log(setMessage('work harder'));
// sendMessage('Ann');
// -------------------------- task 2 --------------
// input: string
// output: string

export default function createMessenger(){
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

// ------------------- task 3 -----------------0
// input:
// output:
// let result = 0;

export const add = number => {
  result += number;
};

export const decrease = number => {
  result -= number;
};

export const reset = () => {
  result = 0;
};

export const getMemo = () => {
  return result;
};
