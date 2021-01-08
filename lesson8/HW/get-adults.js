'use strict';
// 1.learn requirements
// 2.create step by step algo(& input/output for functions(before functions(in types)))
// 3.draft solution & testing
// 4.refactoring & final testing --> final solution

// 1.iterate an obj
// 2.find people with age >= 18
// 3.add these people to new obj
const obj = {
  'Katya' : 18,
  'Tom' : 8,
  'Andrew' : 17,
  'Bob' : 34,
  'Sam' : 75,
  'Daniel' : 3,
}

// const getAdults = (obj) => {
//   let adults = {};
//   const people = Object.keys(obj);
//   const ages = Object.values(obj);
//   let adultIndex;
//   let adult;

//   for(let i of ages){
//     if(i >= 18){
//       adultIndex = ages.indexOf(i);
//       adult = people[adultIndex];
//     }
//   }
// return adults;
// }

// option 1 (output:object)
// const getAdults = (obj) => {
//   let adults = {};
//   for (let i in obj) {
//     let age = obj[i]
//     if (age >= 18) {
//       adults[i] = age
//     }
//   }

//   return adults;
// }

// option 2 Vasya (output:array)
 export const getAdults = (obj) => {
  const usersArr = Object.entries(obj); //преобразовали объект в многомерный массив
  const filteredUsersArr = usersArr
    .filter(user => user[1] >= 18); //убрали те массивы,в которых есть те, у которых первый элемент(возраст) меньше 18
  const usersNames = filteredUsersArr
    .map(user => user[0]); //взяли из оставшихся массивов нулевые элементы и вывели их в массив
  return usersNames;
}

// =
// const getAdults = (obj) => Object.entries(obj)
//     .filter(user => user[1] >= 18)
//     .map(user => user[0]);

console.log(getAdults(obj));