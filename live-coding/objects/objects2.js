// const user1 = {
//     name: 'Tom',
//     age : 32,
//     isWorking : true,
// }

// const user2 = {
//     name: 'Tom',
//     age : 32,
//     isWorking : true,
// }

// const compareObjects = (obj1,obj2) => {
//     // const first = Object.assign({}, obj1);
//     // const second = Object.assign({}, obj2);
//     // console.log(first, second);
//     // return (first === second);
//     return (Object.values(obj1) === Object.values(obj2));
// }

// console.log(compareObjects(user1,user2));

// const arr = [];
// arr.length = 5;
// console.log(arr.fill(1));
// input: arr arr
// output: obj

// algo
// const keys = []
// function buildObject(keys,values) {
//     return keys.reduce((acc,key, index) => (keys[key] = values),{});
// }

// function buildObject (keys, values ) {
//     return keys.reduce((acc, key, index) => {
//         // console.log('step' + index);
//         // console.log('acc' + acc);
//         // console.log('key' + key);
//         // console.log('value' + values[index]);
//        return { ...acc, [key]: values[index] }},{})
// };
// console.log(buildObject(['f','g','h'],[1,2,3]));


function buildObject (keys, values ) {
    const res = {};
    for(i = 0; i < keys.length; i++){
    const key = keys[i];
    const value = values[i];
    Object.assign(res, {[key]: value});
}
    return res;
}
console.log(buildObject(['f','g','h'],[1,2,3]));

// отладка кода с помощью debugger(использовать его каждый день) - инмтрумент браузера
// let str = "I love JavaScript";

// let result = str.match(/lalal/g);

// console.log(result);

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const obj = {name: 'Ann', age: 20, city: 'Kiev'}

console.log({...obj});