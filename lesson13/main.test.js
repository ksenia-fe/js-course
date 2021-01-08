it('17 is a number 17', () => {
  expect(17).toEqual(17);
});

it('18 is not a number 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => arr.filter(el => el % 2 === 0);

it('should get only even numbers', () => {
  const result = getEvenNumbers([5, 6, 7, 8, 9, 10]);

  expect(result).toEqual([6, 8, 10]);
});
