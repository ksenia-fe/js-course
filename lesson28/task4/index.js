const add = value => value + 3;
const div = value => value / 2;
const mult = value => value * 2;

const compose = (...functions) => initValue => {
  return functions.reduce((acc, func) => func(acc), initValue);
};

const doEverything = compose(add, div, mult);
console.log(doEverything(3));
