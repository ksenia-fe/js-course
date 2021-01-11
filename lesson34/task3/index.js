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
    if(formElem.checkValidity()){
        submitBtnEl.removeAttribute('disabled');
   }
}
const nameCheck = (e) => {
    if(formElem.checkValidity()){
        submitBtnEl.removeAttribute('disabled');
   }
}
const passwordCheck = (e) => {
    if(formElem.checkValidity()){
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
  alert(JSON.stringify(formData));
  emailInputEl.value = '';
  nameInputEl.value = '';
  passwordInputEl.value = '';
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
})
};


formElem.addEventListener('submit', onFormSubmit);



