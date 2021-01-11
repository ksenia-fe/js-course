//algo
// 1. add event to submit button. in this event fetch data
// 2. 
const baseUrl = 'https://5ffacff987478d0017d9a8a0.mockapi.io/tasks/grom/form';

const formElem = document.querySelector('.login-form');
const submitBtnEl = document.querySelector('.submit-button');
const errorTextEl = document.querySelector('.error-text');

const nameInputEl = document.querySelector('#name');
const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');

const emailCheck = (e) => {
    if(formElem.reportValidity()){
        submitBtnEl.removeAttribute('disabled');
   }
}
const nameCheck = (e) => {
    if(formElem.reportValidity()){
        submitBtnEl.removeAttribute('disabled');
   }
}
const passwordCheck = (e) => {
    if(formElem.reportValidity()){
        submitBtnEl.removeAttribute('disabled');
   }
}

emailInputEl.addEventListener('input', emailCheck);
nameInputEl.addEventListener('input', nameCheck);
passwordInputEl.addEventListener('input', passwordCheck);


const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );
    fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
    })
    .then(data => data.json())
    .then(data => {
        alert(JSON.stringify(data));
        emailInputEl.value = '';
        nameInputEl.value = '';
        passwordInputEl.value = '';
    })
    .catch(() => {errorTextEl.textContent = 'Failed to create user'})
};


formElem.addEventListener('submit', onFormSubmit);



