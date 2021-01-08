// sum of elementsof array

const sum = (arr) =>{
  if(!Array.isArray(arr)){
    return null;
  }else{
    return arr.reduce(function(acc, element){
      return acc + element;
    },0);
    ;
}
}

console.log(sum([2, 5, 6, 3, 0, 3, -1]));




// filtered array

const filterNames = (arr, text) =>{
  return arr.filter(name => name.length > 5 && name.includes(text));
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
