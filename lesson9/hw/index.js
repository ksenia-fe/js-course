// !!!!!!!!!!!!!!!!!!
// const getTotalRevenue = (dayTransactions) => {
//  return dayTransactions.reduce((acc, el) => acc + el.amount);
//}

const rooms = {
  room1: [
      { name: 'room1 name1' },
      { name: 'room1 name2' },
      { name: 'room1 name3' },
      { name: 'room1 name4' },
  ],
  room2: [
      { name: 'room2 name1' },
  ],
  room3: [
      { name: 'room3 name1' },
      { name: 'room3 name2' },
      { name: 'room3 name3' },

  ],
};

// algo
// create empty array
// ---
// Object.values
// flat an array
// iterate this array and add name property to empty array

// input:object
// output:array
// structure ofinput: object => arrays => objects

// const getPeople = (rooms) => {
//   let result = [];
//   const arrays = Object.values(rooms); //[room1, room2, room3]
//   const arrayOfObj = arrays.flat();

//   for(let el of arrayOfObj){
//     result.push(el.name);
//   }
//   return result;
//   }

const getPeople = obj => {
  return Object.values(obj)
    .reduce((acc, el) => acc.concat(el), [])
    .map(el => el.name);
}

console.log(getPeople(rooms));




