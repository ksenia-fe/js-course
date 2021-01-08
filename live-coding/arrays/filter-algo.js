// input: array, callback function
// output: array

// callback func input: element, number(index), array
// callback func output: element

// algo
// 1 - iterate array
// 2 apply callback func for every el
// 3 if callback returns el - add this el to result
const  mapArrayElements = (arr, callback) => {
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(callback(arr[i],i,arr));
  }
  return result;
};
const testArr = [2,3,4];//[4,6,8]
const callback = (arrElement, index, entireArr) => arrElement * 2;
