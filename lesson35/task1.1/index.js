// const jsonStr = '{ "name": "Tom" }';
// const userData = JSON.parse(jsonStr);
// console.log(userData);

// const errorHandler = e => {
//   console.log(e);
// };

// window.addEventListener('error', errorHandler);

// try {
//   const jsonStr = '{ "name": "Tom"}';
//   throw new RefferenceError();
//   const userData = JSON.parse(jsonStr);
//   console.log(userData);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.error(err.name);
//   } else {
//     throw err;
//   }
// } finally {
//   console.log('hi bitch');
// }

const onUnhandledError = err => {
  console.error('error', err.message);
};

window.addEventListener('error', onUnhandledError);

let userParsingResult;

try {
  const user = JSON.parse('{ "name": "Tom"}');
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{ "productId": "1234f6"');
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
