const expect = require('expect');

let {isRealString} = require('./validations');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let text = 1;
    let res = isRealString(text);

    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let text = "    ";
    let res = isRealString(text);

    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', function() {
    let text = "Correct string";
    let res = isRealString(text);

    expect(res).toBe(true);
  });
});
