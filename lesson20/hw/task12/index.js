const getSection = num => {
  const span = document.querySelectorAll('span');
  return [...span]
    .map(el => {
      if (el.dataset.number === num.toString()) {
        return el.closest('.box').dataset.section;
      }
    })
    .filter(el => typeof el === 'string')[0];
};

console.log(getSection(2));
