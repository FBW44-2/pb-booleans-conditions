const number04 = 4;
const string04 = '4';

const isEqualByValue = number04 == string04; // true
console.log(!isEqualByValue); // false

const isEqualByValueAndType = number04 === string04; // false
const isNotEqualByValueAndType = number04 !== string04; // true, is not equal to
console.log(!isEqualByValueAndType); // true

// !false -> true
// !true -> false

console.log('isEqualByValueAndType: ' + isEqualByValueAndType, 'isEqualByValue: ' + isEqualByValue);
console.log('isNotEqualByValueAndType: ', isNotEqualByValueAndType);