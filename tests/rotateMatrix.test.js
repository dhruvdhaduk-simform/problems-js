const rotateMatrix = require("../src/rotateMatrix.js");

test("Test rotateMatrix", () => {
    let m = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let ans = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ]

    expect(rotateMatrix(m)).toStrictEqual(ans);
});