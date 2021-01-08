export const createButton = buttonText => {
  const btn = document.createElement('button');
  btn.innerHTML = buttonText;
  return document.body.append(btn);
};

createButton('Have a good day Andrey');
