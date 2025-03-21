function customMathPow(a, b) {
    let ans = 1;
    for (let i = 0; i < b; i++) {
        ans *= a;
    }
    return ans;
}

module.exports = customMathPow;