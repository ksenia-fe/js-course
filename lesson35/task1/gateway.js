export const fetchUserData = name =>
  fetch(`https://api.github.com/users/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });

export const fetchReposes = url =>
  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
