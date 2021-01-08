import {getAdults} from './get-adults';

it('should filter an object of people and return adults', () => {
  const result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });

  expect(result).toEqual(['John Doe','Bob']);
})