// Sum of digits
//
// Test drive a function that returns the sum of digits passed in
//
// Examples:
//     sumOfDigits(1) returns 1
//     sumOfDigits(12) returns 3
//
// Hint: you can get the last digit in a number like so 12 % 10 = 2
//
// How would you like to handle non-numberic parameters being passed in?
// How about no parameters?
var sumOfDigits = function(digitsToSum) {
    if(isNaN(digitsToSum)) {
        throw new Error('Invalid Arguments');
    }

    if(digitsToSum < 10) {
        return digitsToSum;
    }

    var currentDigit = digitsToSum % 10;
    var remainingDigits = Math.floor(digitsToSum / 10);
    return currentDigit + sumOfDigits(remainingDigits);
};