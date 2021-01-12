const fetchUsersData = async userId => {
  const response = await fetch(`https://api.github.com/users/${userId}`);

  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed');
};

const getusersBlogs = arr => {
  try {
    return Promise.all(arr.map(el => fetchUsersData(el).then(data => data.blog)));
  } catch (err) {
    console.log(err.message);
  }
};

getusersBlogs(['facebook', 'google', 'github']).then(data => console.log(data));
