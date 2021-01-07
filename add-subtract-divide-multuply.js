// # Add subtract divide multiply

// Write the logic that given two numbers will print to the console if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, print null.You can assume it will always be two iteger numbers.
// You should print either "added", "subtracted", "divided", "multiplied" or null, even if multiple cases would be possible.

//     Examples:

// * with 15 and 9 ➞ "added"
//     * with 26 and 2 ➞ "subtracted"
//         * with 11 and 11 ➞ null
//             * 12, 12 ➞ "added"
//                 * 100, 76 ➞ "subtracted"
//                     * 6, 4 ➞ "multiplied"
//                         * 528, 22 ➞ "divided"
//                             * 10, 12 ➞ null

// Uncomment one at a time to test the different cases
// const a = 15;
// const b = 9;

// const a = 26;
// const b = 2;

// const a = 6;
// const b = 4;

const a = 528;
const b = 22;

// const a = 10;
// const b = 12;

if (a + b === specialNumber) {
    console.log("added");
} else if (a - b === specialNumber) {
    console.log("subtracted");
} else if (a * b === specialNumber) {
    console.log("multiplied");
} else if (a / b === specialNumber) {
    console.log("divided");
} else {
    console.log(null)
}
