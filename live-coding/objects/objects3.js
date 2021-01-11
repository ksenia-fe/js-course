//  ------------------------ 21-12-2020 ---------------------
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Andrey',
    age: 100,
  },
};

// input: obj
// output: array(of objects)

// 1 copy obj & get obj entries
// 2 map array
// 3 sort array

const getCustomersList = obj => {
  const result = Object.entries(obj)
    .map(arr => Object.assign({}, arr[1], { id: arr[0] }))
    .sort((a, b) => a.age - b.age);
  return result;
};
console.log(getCustomersList(customers));

// const getCustomersList = (obj) => {
//     return Object.entries(obj)
//     .map((arr) => ({...arr[1], id : arr[0]}))
//     .sort((a,b) => a.age - b.age);
// }
// console.log(getCustomersList(customers));

// input: obj
// output: array(of objects)
// algo:
// 1 copy object
// 2 get ids from copy (vie forEach method)
// 3 flatten an array
// 4 add ids to objects
// 5 sort objects deppending on people ages
// return copy

// const getCustomersList = (obj) => {
//     const copyObj = Object.assign({}, obj);
//     const props = Object.entries(copyObj);
//     let idProp = [];
//     props.forEach(el => {
//         idProp.push(el[0]);
//     })
//     const people = (props.map(el => el.splice(1)))
//                 .flat()
//                 .map((el,index) => Object.assign({},el, {id : idProp[index]}))
//                 .sort((a,b) => a.age - b.age);
//     return people;
// }
// console.log(getCustomersList(customers));

// const copy = {...customers};
// console.log(copy);
// console.log(copy == customers);

// destructuring of objects
const user = {
  name: 'Denis',
  run: () => {
    console.log('running');
  },
};

function s() {
  const { name: name, run } = user;

  console.log(name);
  console.log(run);
}

s(user);
// ctrl + shift + l  OR f2 on highlited name
// vscode hotkeys
