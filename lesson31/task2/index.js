const asyncCalculator = numbr => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(value => {
      return new Promise(resolve => {
        setTimeout(() => {
          const res = value * value;
          console.log(`Squared value: ${res}`);
          resolve(res);
        }, 500);
      });
    })
    .then(value => {
      const res = value * 2;
      console.log(`Doubled value: ${res}`);
      return res;
    });
};

asyncCalculator(5).then(data => console.log(data));
