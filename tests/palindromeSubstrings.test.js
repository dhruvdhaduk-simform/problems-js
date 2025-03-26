const palindromeSubstrings = require("../src/palindromeSubstrings.js");

test("Test palindromeSubstrings function", () => {
    expect(palindromeSubstrings("madam").sort()).toStrictEqual(['m', 'a', 'd', 'a', 'm', 'ada', 'madam'].sort());
});
