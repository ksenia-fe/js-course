// const user = {
//   firstName: 'Ksenia',
//   lastName: 'Belikova',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   // =
//   // getFullName() {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
// };
// const func = user.getFullName;
// func(); // undefined context lost

// const func2 = user.getFullName.bind(user);
// func2(); // Ksenia Belikova context recover
// const func3 = user.getFullName;
// func3.call(user); // Ksenia Belikova

// const func5 = user.getFullName;
// func5.call({ name: 'Tom' }); // arg1, arg2); // Tom

// const func4 = user.getFullName;
// func4.apply({ name: 'Tom' }); // [arg1, arg2]); // Tom

// console.log(user.getFullName());

// -------------------------- task 2 -------------------------
// const callbackPrompt = {
//   message: 'Tell me your number',
//   showPrompt: function () {
//     const phoneNumber = prompt(this.message);
//     console.log(phoneNumber);
//   },
//   showDeferredPrompt: function (ms) {
//     setTimeout(this.showPrompt.bind(this), ms);
//   },
// };

// callbackPrompt.showDeferredPrompt(1000);

// -------------------- task 3 ------------------------------
// defer(func,ms) => function
// const defer = (func, ms) =>
//   function () {
//     setTimeout(() => func.apply(this, arguments), ms);
//   };

// const user2 = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}!`);
//   },
// };

// const deferredHi = defer(user2.sayHi, 1000);

// deferredHi.call({ name: 'Bob' });

const user = {
  firstName: 'Vasya',
  lastName: 'Velmyk',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName: function (name) {
    const nameArr = name.split(' ');
    this.firstName = nameArr[0];
    this.lastName = nameArr[1];
  },
};

user.setFullName('Ksenia Belikova');
console.log(user);
