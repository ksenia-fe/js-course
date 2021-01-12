const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });

  return request;
};

const a = requestUserData('user-1').then(data => console.log(data));
const b = requestUserData('user-1').then(data => console.log(data));
console.log(a === b); // false === also false
requestUserData('broken').catch(data => console.log(data));
requestUserData('user-134').finally(() => console.log('finally'));
