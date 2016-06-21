describe('overlapping lists tests', function() {
   it('[1,2,3] overlaps [3,4,5]', function() {
       expect(isOverlapping([1,2,3], [3,4,5])).toBe(true);
   });

    it("['a','b','c'] does not overlap ['d','e','f']", function() {
        expect(isOverlapping(['a','b','c'], ['d','e','f'])).toBe(false);
    });

    it('should throw an exception if no parameters are passed in', function () {
        expect(function(){ isOverlapping(); }).toThrow(new Error('Invalid Arguments'));
    });

    it('should throw an exception if only one parameter is passed', function () {
        expect(function(){ isOverlapping([]); }).toThrow(new Error('Invalid Arguments'));
    });
});