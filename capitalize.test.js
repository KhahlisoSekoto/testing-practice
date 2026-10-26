import { capitalize } from './capitalize';

test('capitalizes the first letter of a lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});