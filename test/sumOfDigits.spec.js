describe('sum of digits tests', function () {
    it('sum of 1 is 1', function () {
        expect(sumOfDigits(1)).toBe(1);
    });

    it('sum of 12 is 3', function () {
        expect(sumOfDigits(12)).toBe(3);
    });

    it('should throw an exception if not passed a number', function () {
        expect(function(){ sumOfDigits("not a number"); }).toThrow(new Error('Invalid Arguments'));
    });

    it('should throw an exception if not passed any parameter', function () {
        expect(function(){ sumOfDigits(); }).toThrow(new Error('Invalid Arguments'));
    });
});