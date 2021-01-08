'use strict';

// const text = 'message';

// // template string
// const myMessage =
// `The text is ${text.toUpperCase()},
// And smth else.`;

// console.log(myMessage);
// console.log(myMessage[0]);//T
// console.log(text[text.length - 1]);//e?
// console.log(text.charAt(3));//s
// console.log(text.concat('ASMR'));//messageASMR = text + 'ASMR'
// console.log(text.split(''));//["m", "e", "s", "s", "a", "g", "e"]
// console.log(text.split('e'));//["m", "ssag", ""]

// ------------------------- task 1 ----------------------
// split text
// algo
// 1 - divide text to strings & add them to arr
// 2 
// const splitText = (text,len = 10) => {
//   const strArr = [];
//   let start = 0;

//   if(!(typeof text == 'string')){
//     return null;
//   }
//   while(true){
//     let chunk = text.substr(start, len);
//     if(chunk.length === 0){
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     start += len;
//   }
  
//   return strArr.join('\n');
// }

// console.log(splitText('porkporkporkpork', 4));

// ------------------------- task 2 ----------------------
// const contacts = [
//   { name: 'Tom', phoneNumber: '777-77-77' },
//   { name: 'Ann', phoneNumber: '777-77-77' },
//   { name: 'Karla', phoneNumber: '777-77-77' },
//   { name: 'Andrew', phoneNumber: '777-77-77' },
//   { name: 'Tanya', phoneNumber: '777-77-77' },
//   { name: 'Giya', phoneNumber: '777-77-77' },
// ];

// const sortContcats = (contacts, bool = true) => {
//   if(!Array.isArray(contacts)){
//     return null;
//   }
//   if(bool === true){
//     return contacts
//       .sort((a,b) => a.name./localeCompare(b.name));
//   }else if(bool === false){
//     return contacts
//       .sort((a,b) => b.name.localeCompare(a.name));
//   }
// }

// console.log(sortContcats(contacts,false));


// ------------------------- task 3 ----------------------
// const splitString = (text,len = 10) => {
//   const strArr = [];
//   let start = 0;
//   let chunk;
//   let dotsCount;
//   if(!(typeof text === 'string')){
//     return null;
//   }
//   while(true){
//     chunk = text.substr(start, len);
//     if(chunk.length === 0){
//       break;
//     }
//     strArr.push(chunk[0] + chunk.slice(1));
//     start += len;
//     dotsCount = len - chunk.length;
//   }
//   const last = strArr[strArr.length - 1].concat('.'.repeat(dotsCount));
//   strArr[strArr.length - 1] = last;
//   return strArr;
// }

// ----------------------- task 4 --------------------
// input: string, substring
// output: number
// refactoring??
// const countOccurrences = (str, sub) => {
//   const result = [];
//   if(sub == ''){
//     return null;
//   }else{
//     for (let i = 0; i < str.length; i++) {
//       if (str.indexOf(sub, i) != -1) {
//           result.push(str.indexOf(sub, i));
//           i = str.indexOf(sub, i);
//           console.log('i ' + i);
//       }
//     }
//     return result.length;
//   }
// }

// console.log(countOccurrences('ooooopopopopop','po'));