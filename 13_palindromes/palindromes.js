const palindromes = function (string) {
  // Characters to consider
  const alphanumerals = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerals.includes(character))
    .join('');

  const reversedString = cleanedString.split('').reverse().join('');
  return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
