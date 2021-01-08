// [1,2,3,[4,5],[6]] => [1,2,3,4,5,6]
// const flattenArray = arr => {
//   const flatArray = arr.reduce((acc, element) => {
//     return acc.concat(element);
//   }, []);

//   return flatArray;
// };
// =
const arr = [5, 3, 4];

const redArray = arr =>
  arr.reduce((acc, el) => {
    console.log('acc ' + acc);
    console.log('el ' + el);
    return acc + el;
  }, 0);

console.log(redArray(arr));

// or you can use flat() method
// const flattenArray = arr => arr.flat();

// [1, 2, 3, 4].reduce(function (acc, num) {
//   return acc + num;
// }, 0);

// 1:0+1=1
// 2:1+2=3
// 3:3+3=6
// 4:6+4=10
