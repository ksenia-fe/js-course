import getMinSquare from './getMinSquaredNumber.js';

it('should get minsquared absolute number from array', () => {
  const inputArray = getMinSquare([-777, 3, -2, 6, 45, -20]);
  const inputString = getMinSquare('fgg');
  const inputEmptyArr = getMinSquare([]);

  expect(inputArray).toEqual(4);
  expect(inputString).toEqual(null);
  expect(inputEmptyArr).toEqual(Infinity);
});
