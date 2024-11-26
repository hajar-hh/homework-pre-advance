const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

test('this test should be return falsy', () => {
    expect(isTruthyOrFalsy(false)).toBeFalsy();
    expect(isTruthyOrFalsy(0)).toBeFalsy();
    expect(isTruthyOrFalsy("")).toBeFalsy();
  });
  
  test('this test should be return truthy', () => {
    expect(isTruthyOrFalsy(true)).toBeTruthy();
    expect(isTruthyOrFalsy(25)).toBeTruthy();
    expect(isTruthyOrFalsy("hajar")).toBeTruthy();
  });
  