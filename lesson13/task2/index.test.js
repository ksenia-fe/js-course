import sum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredArray([2, 3]);

  expect(result).toEqual([4, 9]);
});

it('should get only odd numbers', () => {
  const result = getOddNumbers([2, 3, 4, 5]);

  expect(result).toEqual([3, 5]);
});

it('should get sum of elements', () => {
  const result = sum(2, 3);

  expect(result).toEqual(5);
});
