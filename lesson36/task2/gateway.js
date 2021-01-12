export const fetchUserData = async name => {
  const response = await fetch(`https://api.github.com/users/${name}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchReposes = async url => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};
