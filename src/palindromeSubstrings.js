const isPalindrome = require("./isPalindrome.js");

function palindromeSubstrings(s) {
    const substrs = [];
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < s.length - i + 1; j++) {
            let substr = s.substring(j, j + i);
            if (isPalindrome(substr)) {
                substrs.push(substr);
            }
        }
    }

    return substrs;
}

module.exports = palindromeSubstrings;