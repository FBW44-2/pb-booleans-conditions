// # Count decimal places

// using JavaScript write the logic to count the number of decimal places a number has.Any zeros after the decimal point count towards the number of decimal places.Print to the console number XYZ has 3 decimal places.
// When the number has no decimal places, print to the console: a message saying there were no decimal places.

// Sample numbers:

// 43.20 ➞ 1
// 400 ➞ 0
// 3.1 ➞ 1
// 151.2783 ➞ 4

const num = 151.2783;

const numToString = num.toString();

console.log(numToString);

const dotIndex = numToString.indexOf('.'); // the value of the index, -1 if no such charcter is found

console.log('dotIndex is ', dotIndex);

if (dotIndex !== -1) {
    // it contains a dot
    const stringAfterDot = numToString.substring(dotIndex + 1);
    console.log(stringAfterDot.length);
} else {
    console.log(0);
}