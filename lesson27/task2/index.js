const counterEl = document.querySelector('.counter');
const counterValueEl = document.querySelector('.counter__value');

const changeCounter = event => {
  const isBtn = event.target.classList.contains('counter__btn');

  if (!isBtn) {
    return;
  }
  const action = event.target.dataset.action;
  const oldValue = +counterValueEl.textContent;
  const newValue = action === 'up' ? oldValue + 1 : oldValue - 1;

  localStorage.setItem('counterValue', newValue);

  counterValueEl.textContent = newValue;
};

counterEl.addEventListener('click', changeCounter);

const changeStorage = event => {
  counterValueEl.textContent = event.newValue;
};

window.addEventListener('storage', changeStorage);

const loadDocument = () => {
  counterValueEl.textContent = localStorage.getItem('counterValue');
};

document.addEventListener('DOMContentLoaded', loadDocument);
