const customMathPow = require("../src/customMathPow.js");

test("Test customMathPow function", () => {
    expect(customMathPow(10, 2)).toBe(100);
    expect(customMathPow(12, 0)).toBe(1);
    expect(customMathPow(11, 1)).toBe(11);
    expect(customMathPow(9, 3)).toBe(729);
});
