// const generateNumbersRange = (from, to) => {
//   const result = [];

//   for (let i = from; i <= to; i++) {
//     result.push(i);
//   }

//   return result;
// };
const generateNumbersRange = (from, to) => {
  //return Array.from({ length: to - from }, (el, ind) => el = ind + 1);
  return Array(to - from + 1)
    .fill()
    .map((el, ind) => (el = ind + 1));
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(seatNumber => `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`)
    .join('');

const getSectorLines = () =>
  generateNumbersRange(1, 10)
    .map(
      lineNumber =>
        `<div class="sector__line" data-line-number="${lineNumber}">${getLineSeats()}</div>`,
    )
    .join('');

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const sectorString = generateNumbersRange(1, 3)
    .map(
      sectorNumber =>
        `<div class="sector" data-sector-number="${sectorNumber}">${getSectorLines()}</div>`,
    )
    .join('');

  arenaElem.innerHTML = sectorString;
};
renderArena();

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);
