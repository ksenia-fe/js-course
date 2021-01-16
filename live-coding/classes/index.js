/* eslint-disable max-classes-per-file, no-console */

class Sportsman {
  constructor(name) {
    this.name = name;
  }

  //   get name() {
  //     if (this.name.length < 3) {
  //       throw new Error('error');
  //     }
  //     return this.name;
  //   }

  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, style) {
    // can lose context -1
    super(name);
    this.style = style;
  }

  swim() {
    console.log(`${this.name} is swimming ${this.style}`);
  }
  //   add() {
  //     const binded = this.swim.bind(this);
  //     setTimeout(() => {
  //       console.log(this.style);
  //     }, 1000); // can lose context - 2
  //   }
}

const user = new Sportsman('Tom');
const p2 = new Swimmer('Jhon', 'some style');
user.run();
p2.add();
// can lose context -3
// const wrong = p2.swim;
// console.log(wrong());

// lose context with static -4
// Swimmer.swim;

const test = { name: 'Test' };
console.log(test);
