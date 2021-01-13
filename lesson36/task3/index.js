const fetchUsersData = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);

  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed');
};

const getUsersBlogs = arr => {
  try {
    return Promise.all(arr.map(el => fetchUsersData(el).then(data => data.blog)));
  } catch (err) {
    console.log(err.message);
  }
};

getUsersBlogs(['facebook', 'google', 'github']).then(data => console.log(data));

// const fetchUsers = async userId => {
//   const response = await fetch(`https://api.github.com/users/${userId}`);

//   if (response.ok) {
//     return response.json();
//   }
// };
// export const getUsersBlogs = userId => {
//   try {
//     return Promise.all(userId.map(user => fetchUsers(user).then(userData => userData.blog)));
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// getUsersBlogs(['google', 'facebook', 'gaearon']).then(data => console.log(data));
