import { reverseString } from './reverseString';

test('reverses a simple lowercase word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('handles strings with spaces and punctuation', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});