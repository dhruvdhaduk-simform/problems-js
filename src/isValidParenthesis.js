function isValidParenthesis(str) {
    const stack = [];

    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < str.length; i++) {
        if (['(', '{', '['].includes(str[i])) {
            stack.push(str[i]);
        }
        else if (str[i] in pairs) {
            if (stack[stack.length - 1] === pairs[str[i]]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    if (stack.length) {
        return false;
    }

    return true;
}

module.exports = isValidParenthesis;