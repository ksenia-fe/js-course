import { reverseString, cleanTransactionsList } from './main';

it('should get reversed string', () => {
  const result = reverseString('qwertyuiop');
  const inputNotStr = reverseString(23);
  const inputEmptyStr = reverseString('');

  expect(result).toEqual('poiuytrewq');
  expect(inputNotStr).toEqual(null);
  expect(inputEmptyStr).toEqual('');
});

it('should get an array with filtered transactions info', () => {
  const result = cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']);
  const inputEmptyArr = cleanTransactionsList([]);
  const inputNumber = cleanTransactionsList(23);

  expect(result).toEqual(['$1.90', '$16.40', '$17.00']);
  expect(inputEmptyArr).toEqual([]);
  expect(inputNumber).toEqual(null);
});
