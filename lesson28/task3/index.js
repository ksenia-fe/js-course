// const sum = (a,b) => a + b;
// the same
// const sum = a => b => a + b;

// const add3 = sum(3);

// const result = add3(5);

// console.log(result);

const mult = a => b => a * b;

console.log(mult(4)(5));

const twice = num => mult(2)(num);
const triple = num => mult(3)(num);

console.log(twice(9));
console.log(triple(9));
