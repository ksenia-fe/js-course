const spinnerEl = document.querySelector('.spinner');

export const showSpinner = () => {
  spinnerEl.classList.remove('spinner_hidden');
};

export const hideSpinner = () => {
  spinnerEl.classList.add('spinner_hidden');
};
