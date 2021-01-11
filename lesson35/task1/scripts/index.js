import { fetchUserData, fetchReposes } from './gateway.js';
import { renderUserData } from './user.js';
import { renderReposes, cleanReposesList } from './reposes.js';
import { showSpinner, hideSpinner } from './spinner.js';

const userAvatarEl = document.querySelector('.user__avatar');

userAvatarEl.src = 'https://avatars2.githubusercontent.com/u10001';

const nameBtnEl = document.querySelector('.name-form__btn');
const nameInputEl = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposesList();
  const userName = nameInputEl.value;
  fetchUserData(userName)
    .then(data => {
      renderUserData(data);
      return data.repos_url;
    })
    .then(url => fetchReposes(url))
    .then(reposesList => {
      renderReposes(reposesList);
      hideSpinner();
    })
    .catch(err => {
      hideSpinner();
      alert(err.message);
    });
};

nameBtnEl.addEventListener('click', onSearchUser);
