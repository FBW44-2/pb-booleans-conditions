
// if (condition that evaluates to a boolean) {
// true clause -> do smth if condition is true
// }

const isDev = true;

if (isDev) {
    console.log('DEV environment is ON');
}

const text = '';

console.log(text.length); // 0 -> falsey value

// Booleans: true and false

// Falsey:
// 0
// undefined and null
// ''

// Truthy:
// numbers that are not 0

// if (0 === 0) true
// if (text.length !== 0)

// if (0)

const isEmptyString = text.length === 0; // true

// 0 !== 0 false
// const isNotEmptyString = text.length !== 0; // false
// 0 > 0 false
const isNotEmptyString = text.length > 0; // false

if (!isEmptyString) { // !true -> false
    console.log('This string is NOT empty')
} else {
    console.log('This is an empty string')
}

if (isEmptyString) {
    console.log('This is an empty string')
} else {
    console.log('This string is NOT empty')
}


let price;

console.log(price); // undefined

if (price) {
    console.log('there is a price');
} else {
    console.log('there is NO price');
}

let emptyString = '';

if (emptyString) {
    console.log('NOT an emptyString');
} else {
    console.log('emptyString is empty');
}


// let user = null;

// if (!user) {
//     console.log('You must log in first')
// }
// // display logins
// // user logs in, we do some work... call backend and so on
// user = 'Martin';