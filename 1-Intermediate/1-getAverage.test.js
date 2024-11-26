const getAverage = require('./1-getAverage');

describe('get averages for numbers', () => {
  it('average of 3 positive numbers', () => {
    expect(getAverage(18, 12, 16)).toBeCloseTo(15.333, 3); 
    expect(getAverage(20, 20, 20)).toBe(20);
    expect(getAverage(19, 19, 14)).toBeCloseTo(17.333, 3); 
  });

  it('average of 3 negative numbers', () => {
    expect(getAverage(-18, -12, -16)).toBeCloseTo(-15.333, 3); 
    expect(getAverage(-20, -20, -20)).toBe(-20);
    expect(getAverage(-19, -19, -14)).toBeCloseTo(-17.333, 3); 
  });
});
