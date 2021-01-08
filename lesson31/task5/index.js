// const delay = num => {
//   const p = new Promise(resolve => {
//     setTimeout(() => {
//       const res = console.log(`Hi! I'm delayed for ${num / 1000} sec`);
//       resolve(res);
//     }, num);
//   });
//   return p;
// };

const delay = num => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(console.log(`Hi! I'm delayed for ${num / 1000} sec`));
    }, num);
  });
};

delay(1000);
