// work with event.target & debugger a lot
// option 1
// const items = document.querySelectorAll('.list-item');

// console.log(items);

// items.forEach(item => {
//   item.addEventListener('click', handlerClick);
// });

// function handlerClick() {
//   console.log('clicked');
// }

// option 2
const list = document.querySelector('.list');
list.addEventListener('click', handlerList);

function handlerList(event) {
  if (event.target.className !== 'list-item') {
    return;
  }
  console.log(event.target.textContent);
}

// WEB FLOW
// 1. get data from server ==> array og objects [{...},{...},{...}]
// 2. render (!!!)
// 3. handle event - UPDATE [{...},{...},{...}] don't toch DOM
// 4. rerender

// algo
// 1. find task in array which is clicked
// 2. update done field
// 3. call render
// NEVER CHANGE DOM! you can only change arrays
// function handlerTaskList(event) {}
// evenListener prepares data for render, render changes data

// read form element & form it to obj
