/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = value => {
  return Promise.resolve(value);
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});

//  --------------------- task 4 ----------------------
const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below
const args = [promiseNumber1, promiseNumber2, promiseNumber3];
const resultPromise = Promise.all(args);

resultPromise
  .then(numbersList => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });
