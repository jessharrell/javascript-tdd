describe('Test Palendromes', function () {
    it('tacocat is a palendrome', function () {
        expect(isPalendrome('tacocat')).toBe(true);
    });

    it('tacodog is not a palendrome', function () {
        expect(isPalendrome('tacodog')).toBe(false);
    });

    it('should throw an exception if not passed a parameter', function () {
        expect(function(){ isPalendrome(); }).toThrow(new Error('Invalid Argument'));
    });
});