// access to key properties of object

const user = {
  name: 'Tom',
  age : 32,
  isWorking : true,
}

const { name: second } = user; //? changed name to second
const { isMarried = true } = user; //added property
const { name } = user; //Tom 
const {age = 'Sam', ...restProps} = user; //rest of properties
console.log(restProps);

const player = {
  secondName : 'Vasya',
  ...restProps,
}

console.log(player);