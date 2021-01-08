const reverseArray = (arr) => {
  if(!Array.isArray(arr)){
    return null;
  }else{
    return arr.slice().reverse();
}
}

console.log(reverseArray([1,2,3,4,5,6,7]));