import { calculator } from './calculator';

test('adds two numbers correctly', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts two numbers correctly', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies two numbers correctly', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test('divides two numbers correctly', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});