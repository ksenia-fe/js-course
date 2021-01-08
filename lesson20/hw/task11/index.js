// task 11
// const squareNumbers = () => {
//   const li = document.querySelector('.number');
//   let dataNumber = li.dataset.number;
//   const squared = dataNumber ** 2;
//   li.setAttribute('data-squared-number', squared);
// };

const squaredNumbers = () => {
  const liEl = document.querySelectorAll('.number');
  [...liEl].map(li => {
    const dataNumber = li.dataset.number;
    const squared = dataNumber ** 2;
    li.setAttribute('data-squared-number', squared);
  });
};

// const squaredNumbers = () => {
//   const liElem = document.querySelectorAll('.number');
//   [...liElem].map(el => {
//     const num = el.dataset.number;
//     el.dataset.squaredNumber = num * num;
//   });
// };
squaredNumbers();
