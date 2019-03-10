// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// with simple for loop
function reverse(str) {
  let reversedStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr += str[i];
  // }
  // try to start using new syntax more
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

// with reduce
// const reverse = str => {
//   // reducer function
//   let reducer = (accumulator, currentVal) => {
//     return currentVal + accumulator;
//   };
//   // reduce takes a callback function for action and starting point
//   return str.split('').reduce(reducer, '');
// };

// with reverse
// const reverse = str => {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// };

module.exports = reverse;
