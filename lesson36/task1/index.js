// function func() {
//   return 1;
// }

// async function funcTurnedToPromise() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(17);
//     }, 1000);
//   });
//   const result = await promise; // await return result of Promise funcs (works only inside async funcs)
//   console.log(result);
//   console.log('Hello');
//   return 1;
// }
// console.log('Hi');
// const result = funcTurnedToPromise();

// ----------------------------- task 1 ------------------------

const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    console.log(response);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

fetchUser('facebook')
  .then(data => console.log(data))
  .catch(err => alert(err.message));
