const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
  const listElem = document.querySelector('.list');

  const listItemsElems = listItems.map(itemText => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    if (itemText.done === true) {
      listItemElem.classList.add('list__item_done');
    }
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.classList.add('list__item-checkbox');
    listItemElem.append(checkboxElem, itemText.text);

    return listItemElem;
  });

  listElem.append(...listItemsElems);
};

renderListItems(tasks);
