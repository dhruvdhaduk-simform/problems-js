const isValidParenthesis = require("../src/isValidParenthesis.js");

test("Test isValidParenthesis", () => {
    expect(isValidParenthesis("()")).toBe(true);
    expect(isValidParenthesis("()[]{}")).toBe(true);
    expect(isValidParenthesis("(]")).toBe(false);
    expect(isValidParenthesis("]")).toBe(false);
});