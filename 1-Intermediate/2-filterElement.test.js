const filterElement = require('./2-filterElement');

describe('filterElement function', () => {
  it('should return elements that match the given value', () => {
    expect(filterElement([1, 2, 3, 4, 5], 3)).toEqual([3]); 
    expect(filterElement(['apple', 'banana', 'apple'], 'apple')).toEqual(['apple', 'apple']); 
  });

  it('should return an empty array if no match is found', () => {
    expect(filterElement([1, 2, 3], 4)).toEqual([]); 
  });
});
