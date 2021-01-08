import { calc } from './calculator';
import { withdraw } from '../../lesson7/HW/wthdraw';
import {getAdults} from '../../lesson8/HW/get-adults';
import { reverseString} from '../../lesson12/main';

it('should get reversed string', () => {
  const result = reverseString('qwertyuiop');
  const inputNotStr = reverseString(23);
  const inputEmptyStr = reverseString('');

  expect(result).toEqual('poiuytrewq');
  expect(inputNotStr).toEqual(null);
  expect(inputEmptyStr).toEqual('');
});

it('should filter an object of people and return adults', () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });

  expect(result).toEqual(['John Doe','Bob']);
})

it('should return count of client after withdrawing money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});


it('should get a + b', () => {
  const checkPlus = calc('6 + 3');
  const checkMinus = calc('6 - 3');
  const checkMult = calc('6 * 3');
  const checkDivide = calc('6 / 3');
  const inputNotStr = calc(3);

  expect(checkPlus).toEqual('6 + 3 = 9');
  expect(checkMinus).toEqual('6 - 3 = 3');
  expect(checkMult).toEqual('6 * 3 = 18');
  expect(checkDivide).toEqual('6 / 3 = 2');
  expect(inputNotStr).toEqual(null);
});
