const resolvedPromise = new Promise(resolve => {
  resolve(17);
});
const resolvedPromise2 = Promise.resolve(17);
console.log(resolvedPromise, resolvedPromise2); // same

const rejecredPromise = new Promise((resolve, reject) => {
  reject(new Error('error'));
});
rejecredPromise.catch(data => console.log(data));

const rejecredPromise2 = Promise.reject(new Error('error'));
rejecredPromise2.catch(data => console.log(data));
// console.log(rejecredPromise, rejecredPromise2);

// ------------------- Task 1 --------------------
const asyncSum = (...args) => {
  return Promise.all(args)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error(`Can't calculate`)));
};

function getSum(numbers) {
  return numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + num, 0);
}

asyncSum(2, 3, Promise.reject(new Error('error')), 5).then(data => console.log(data));
