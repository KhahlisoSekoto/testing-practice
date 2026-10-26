import { analyzeArray } from './analyzeArray';

test('correctly analyzes a standard array of numbers', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  
  // Note: We use .toEqual instead of .toBe because we are comparing objects!
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('handles an array containing a single number', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
});