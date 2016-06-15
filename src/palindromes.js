var isPalendrome = function(inputString) {
    if(inputString == undefined) {
        throw new Error('Invalid Argument');
    }
    
    return inputString.split('').reverse().join('') == inputString;
};