// task 1

const transformToObject = (arr) => {
    let obj = {};

    arr.forEach(element => {
      obj[element] = element;
    })

    return obj;
}

console.log(transformToObject([1,3,'hello']));


// perebor obj

const user = {
  name: 'Tom',
  age: 22,
}

// for(let key in user){
//   console.log(user[key]);
// }

// task 2

const concatProps = (obj) => {
  let arr = [];

  for(let key in obj){
    arr.push(obj[key]);
  }

  return arr;
}

console.log(concatProps(user));
