//algo
// 1. add event to submit button. in this event fetch data
// 2. 
const baseUrl = 'https://5ffacff987478d0017d9a8a0.mockapi.io/tasks/grom/form';

const submitBtnEl = document.querySelector('.submit-button');
const errorTextEl = document.querySelector('.error-text');

const nameInputEl = document.querySelector('#name');
const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');

const emailCheck = (e) => {
    if(!e.target.value.includes('@')){
        errorTextEl.textContent = 'email should contain "@" sign';
    }else{
        errorTextEl.textContent = '';
    }
}
const nameCheck = (e) => {
    if(!e.target.value){
        errorTextEl.textContent = 'name field id required';
    }else{
        errorTextEl.textContent = '';
    }
}
const passwordCheck = (e) => {
    if(!e.target.value){
        errorTextEl.textContent = 'password field id required';
    }else{
        errorTextEl.textContent = '';
    }
}

emailInputEl.addEventListener('input', emailCheck);
nameInputEl.addEventListener('input', nameCheck);
passwordInputEl.addEventListener('input', passwordCheck);


const formElem = document.querySelector('.login-form');

if(errorTextEl.textContent = '')
    {
      submitBtnEl.removeAttribute("disabled");
    }
    else
      submitBtnEl.setAttribute("disabled", "disabled");

// if(formElem.reportValidity()){
//     submitBtnEl.disabled = false;
// }

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



