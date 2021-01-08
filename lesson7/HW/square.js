const squareArray = (arr) => {
  if(!Array.isArray(arr)){
      return null;
  }else{
      return arr.map(a => a ** 2);
  }
}

console.log(squareArray('fgb'));