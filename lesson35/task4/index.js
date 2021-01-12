const parseUser = str => {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
};

const user = '{"name":"Violet"}';

console.log(parseUser(user));
