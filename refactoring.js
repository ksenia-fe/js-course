const pickProps = (obj, arr) => {
  return Object.keys(obj)
    .filter(key => !arr.includes(key))
    .reduce((res, field) => (delete res[field], res), { ...obj });
};

res = pickProps({ name: 12, age: 34, city: 'NY' }, ['name', 'city']);
console.log(res); // => {name: 12, city: 'NY'}

const obj = {
  Katya: 18,
  Tom: 8,
  Andrew: 17,
  Bob: 34,
  Sam: 75,
  Daniel: 3,
};
// const getAdults = obj => {
//   adultsAges = Object.values(obj).filter(age => age >= 18);
//   return obj.filter((user, ind) => user.includes(adultsAges(ind)));
// };

const getAdults2 = obj => {
  let adults = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      adults[key] = obj[key];
    }
  }

  return adults;
};

console.log(getAdults(obj));
