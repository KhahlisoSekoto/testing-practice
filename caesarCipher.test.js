import { caesarCipher } from './caesarCipher';

test('shifts a basic lowercase string correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('handles wrapping from z to a correctly', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves the original character case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('leaves punctuation and spaces completely unchanged', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});