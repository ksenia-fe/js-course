import { withdraw } from './wthdraw';

it('should return count of client after withdrawing money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
