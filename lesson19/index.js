export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  this.age = newAge;

  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
    return this.age;
  } else if (this.age < 25) {
    return false;
  }
};
