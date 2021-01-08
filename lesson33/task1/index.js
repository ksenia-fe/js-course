const userNameEl = document.querySelector('.user__name');
const userLocationEl = document.querySelector('.user__location');
const userAvatarEl = document.querySelector('.user__avatar');

userAvatarEl.src = 'https://avatars2.githubusercontent.com/u1004';

const fetchUserData = name => {
  return fetch(`https://api.github.com/users/${name}`).then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarEl.src = avatar_url;
  userNameEl.textContent = name;
  userLocationEl.textContent = location ? `from ${location}` : '';
};

const nameBtnEl = document.querySelector('.name-form__btn');
const nameInputEl = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = nameInputEl.value;
  fetchUserData(userName).then(data => renderUserData(data));
};

nameBtnEl.addEventListener('click', onSearchUser);
