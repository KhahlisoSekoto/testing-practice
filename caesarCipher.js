export function caesarCipher(string, shift) {
  // Ensure the shift factor stays cleanly within 0-25 boundaries
  const safeShift = shift % 26;

  return string
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);

      // Check for Uppercase Letters (ASCII 65 to 90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + safeShift) % 26) + 65);
      }

      // Check for Lowercase Letters (ASCII 97 to 122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + safeShift) % 26) + 97);
      }

      // If it is a space or punctuation, leave it completely alone
      return char;
    })
    .join('');
}