export const setButton = buttonText => {
  return (document.querySelector('body').innerHTML = `<button>${buttonText}</button>`);
};

// console.log(setButton('I am button'));
