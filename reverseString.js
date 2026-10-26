export function reverseString(string) {
  // split('') breaks the string into an array of letters
  // reverse() flips the array order
  // join('') glues the letters back into a single string
  return string.split('').reverse().join('');
}