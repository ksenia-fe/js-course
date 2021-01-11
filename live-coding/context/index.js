'use strict'
// // write bind function which works simmilar to bind method

// // algo
// // repeat how does .bind() works
// // seperate method to steps
// // write a function(using call & apply methods)

// // input: func, context(obj), args(optional)
// // output: func

// const bind = (func, context, ...args) => {
//     return function(...additional){
//         return func.apply(context, args, additional);
//     } 
// };

// const bind2 = (func, context, ...args) => {
//     return function(...additional) {
//         context['method'] = func;
//         return context['method'](...args, ...additional);
//       }
// };

// const user = {
//     name: 'Tom',
//     lastName: 'Petersen',
// };

// const customer = {
//     name: 'Jane',
//     lastName: 'Parket',
//     city: 'Melbourne',
// }

// function greeting(){
//     return `Hi, my name is ${this.name} ${this.lastName}. I am from ${this.city}`;
// }

// console.log(bind2(greeting, user)());







// const user = {
//     firstName: 'Tom',
//     age: 34,
// }


// const printMessage = (country) => {
//     console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}`);
// }

// printMessage('Russia');

// const myBind = (func, context, ...args) => {
//     return func.bind(context, ...args);
// };

// myBind(printMessage, user, 'Russia')();


const bind = (func, context, ...args) => {
    return function(...additional){
        return func.apply(context, args, additional);
    } 
};

// const myBindCall = (func, context, ...args) => {
//     return function(...additional){
//         return func.call(context, ...args, ...additional);
//     } 
// };

// const bindWithotmethods = (func, context, ...args) => {
//     return function(...additional) {
//         const copiedContext = {...context};
//         copiedContext.method = func;
//         return copiedContext.method(...args, ...additional);
//       }
// };

// option 1
// const funcBinded = printMessage.bind(user, 'Ukraine', 'Kiev');
// funcBinded();

// // option 2
// printMessage.bind(user, 'Ukraine', 'Kiev')();

// // option 3
// const funcBinded = printMessage.bind(user, 'Ukraine');
// funcBinded('Kiev');

// // option 4 (the most usable)
// const funcBinded = printMessage.bind(user);
// funcBinded('Ukraine', 'Kiev');

// // option 5
// printMessage.bind(user)('Ukraine', 'Kiev');