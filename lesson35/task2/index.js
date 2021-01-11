const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(data => {
    console.log(data);
    throw new Error('epic fail');
  })
  .catch(err => {
    console.warn(err.message);
  });

const failedRequest = Promise.reject(new Error('failed'));

failedRequest
  .then(data => console.log(data))
  .catch(err => {
    console.warn(err.message);
    throw err;
  })
  .then(data => console.log(data));

const windowErr = e => {
  console.log(e.reason.message);
};

window.addEventListener('unhandledrejection', windowErr);
