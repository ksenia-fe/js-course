/* ===> 1 <=== */

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */

const successPromise = new Promise(resolve => {
  resolve(67);
});

/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

successPromise.then(function onSuccess(number) {
  console.log(number ** 2);
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
successPromise.catch(function onError(error) {
  reject(new Error('I am an error'));
});

// --------------------------- REJECTED -----------------------
/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная failedPromise
 */

const failedPromise = new Promise((resolve, reject) => {
  reject(new Error('Oops, error!'));
});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
  console.log(error);
});
