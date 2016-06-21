describe('overlapping lists tests', function() {
   it('[1,2,3] overlaps [3,4,5]', function() {
       expect(isOverlapping([1,2,3], [3,4,5])).toBe(true);
   });});