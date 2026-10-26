export function analyzeArray(array) {
  if (!array || array.length === 0) return null;

  const length = array.length;
  
  // Sum all numbers together, then divide by the total count
  const sum = array.reduce((accumulator, current) => accumulator + current, 0);
  const average = sum / length;

  // Use Math functions spread (...) across the array values
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length
  };
}