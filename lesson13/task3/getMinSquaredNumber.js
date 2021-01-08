// input: array
// output: number
// algo
// 1 return null if inputis not an array
// 2 get abs of elements
// 3 find min el in array
// 4 get square of this el

export default arr => {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    const absArray = arr.map(el => Math.abs(el));
    return Math.min(...absArray) ** 2;
  }
};
