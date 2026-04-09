let firstValue = 10; // Arbitrary example value.
let secondValue = 20;
let valuesSum = firstValue + secondValue;

function calculateRectangleArea(length, width) {
    return length * width;
}

// Returns a random integer between 0 and 99.
function getRandomInt0to99() {
    return Math.floor(Math.random() * 100);
}

class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

const pagesCount = 7; // Example number of pages.
const exampleValue = 5; // Arbitrary example value.

// Sums all numbers in the array using reduce.
function sumArray(arr) {
    return arr.reduce(
        (sum, n) => {
            return sum + n;
        }, 
        0
    );
}

// Multiplies x by times using repeated addition.
function repeatAddition(x, times) {
    let result = 0;

    for (let i = 0; i < times; i++) {
        result += x;
    }

    return result;
}
