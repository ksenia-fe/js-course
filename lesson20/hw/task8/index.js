export const finishList = () => {
  const parent = document.querySelector('.list');
  const lastLi = document.createElement('li');
  lastLi.textContent = '8';
  parent.append(lastLi);

  const firstLi = document.createElement('li');
  firstLi.textContent = '1';
  parent.prepend(firstLi);

  const specialLi = document.querySelector('.special');
  const beforeSpecial = document.createElement('li');
  beforeSpecial.textContent = '4';
  specialLi.before(beforeSpecial);

  const afterSpecial = document.createElement('li');
  afterSpecial.textContent = '6';
  specialLi.after(afterSpecial);
};

finishList();
