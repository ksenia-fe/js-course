// ///////////////////////////////////////////////////
const arr = [17.456, 45.8, -42.07];

const getTotalPrice = arr => {
  const sum = arr.reduce((acc, num) => acc + num);
  const price = Math.floor(sum * 100) / 100;

  return '$' + price;
};

console.log(getTotalPrice(arr));

// ///////////////////////////////////////////////////
function getRandomNumbers(length, start, end) {
  return end - start <= 1
    ? null
    : Array(length)
        .fill()
        .map(el => Math.round(Math.random() * Math.ceil(end - start) + Math.ceil(start)));
}
console.log(getRandomNumbers(3, 4, 10));
