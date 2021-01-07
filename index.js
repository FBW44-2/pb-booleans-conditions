
const text = 'this is a string   ';

console.log(text.length);
const textLength = text.length; // 19

// console.log(Math.floor(textLength / 2)); // 9
// const middleCharIndex = Math.floor(textLength / 2);

let middleCharIndex;

// Booleans: true or false
// const isTrue = true;
// const isFalse = false;

// === compares by value and type
// !== compares if they are different by value and type
// ==  compares by value and converts the operands
// !=  compares if they are different by value
// =   assignment

//             19 % 2 === 0
//                1 === 0
//                false
//                !isEven -> it means it is odd
//            19 % 2 !== 0
//            1 !== 0
//           true -> it is odd number
const isOdd = textLength % 2 !== 0; // is odd

middleCharIndex = textLength / 2; // 9.5

// if (isEven) {
//     // do smth if num is even
// } else {
//     // do smth if num is odd
// }

if (isOdd) {
    // It is odd, we need to round down the middle index
    middleCharIndex = Math.floor(middleCharIndex);
    console.log('Text length is ODD');
}

// Print the middle character
const middleChar = text[middleCharIndex];
console.log(middleChar);