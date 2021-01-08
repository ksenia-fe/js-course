const finishForm = () => {
  const parent = document.querySelector('.login-form');
  const firstInput = document.querySelector('input');
  const newInput = document.createElement('input');

  firstInput.setAttribute('name', 'login');
  newInput.setAttribute('type', 'password');
  newInput.setAttribute('name', 'password');

  parent.append(newInput);
};

finishForm();
