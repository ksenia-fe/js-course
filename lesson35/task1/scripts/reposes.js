const listElem = document.querySelector('.repo-list');

export const cleanReposesList = () => {
  listElem.innerHTML = '';
};

export const renderReposes = reposesList => {
  const reposesListElems = reposesList.map(({ name }) => {
    const listEl = document.createElement('li');
    listEl.classList.add('repo-list__item');
    listEl.textContent = name;

    return listEl;
  });

  cleanReposesList();
  listElem.append(...reposesListElems);
};
