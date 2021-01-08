const divElem = document.querySelector('.rect_div');
const spanElem = document.querySelector('.rect_span');
const pElem = document.querySelector('.rect_p');
const target = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlers = document.querySelector('.remove-handlers-btn');
const attachHandlers = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
  target.innerHTML += `<span style = 'color: ${color}; margin-left: 8px;'>${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, { capture: true });

spanElem.addEventListener('click', logGreenSpan);
pElem.addEventListener('click', logGreenP);
divElem.addEventListener('click', logGreenDiv);

// clear button
clearBtn.addEventListener('click', () => (target.textContent = ''));
// remove event button
const remove = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, { capture: true });

  spanElem.removeEventListener('click', logGreenSpan);
  pElem.removeEventListener('click', logGreenP);
  divElem.removeEventListener('click', logGreenDiv);
};
removeHandlers.addEventListener('click', remove);
// attach event button
const add = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, { capture: true });

  spanElem.addEventListener('click', logGreenSpan);
  pElem.addEventListener('click', logGreenP);
  divElem.addEventListener('click', logGreenDiv);
};
attachHandlers.addEventListener('click', add);
