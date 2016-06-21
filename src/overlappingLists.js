// Overlapping Lists
//
// Test drive a function that takes in two arrays and returns true if they have members in common and false otherwise.
//
// Examples:
//     isOverlapping([1,2,3], [3,4,5]) returns true
//     isOverlapping([‘a’,’b’,’c’], [‘d’,’e’,’f’] returns false
//
// What if you don’t pass in two arguments?
// What if they’re not arrays?
var isOverlapping = function(firstList, secondList) {
    var isValid = function(arr) {
        return Array.isArray(arr);
    };

    if(!isValid(firstList) || !isValid(secondList)) {
        throw new Error('Invalid Arguments');
    }

    for(var i = 0; i < firstList.length; i++) {
        var item = firstList[i];
        if(secondList.indexOf(item) >= 0) {
            return true;
        }
    }

    return false;
};