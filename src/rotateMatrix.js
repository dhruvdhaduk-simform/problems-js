function rotateMatrix(m) {
    const len = m.length;
    for (const row of m) {
        if (row.length !== len) {
            throw new Error("Matrix is invalid");
        }
    }
    
    let rotated = [];


    for (let j = 0; j < len; j++) {
        let row = [];
        for (let i = len - 1; i >= 0; i--) {
            row.push(m[i][j]);
        }
        rotated.push(row);
    }

    return rotated;
}

module.exports = rotateMatrix;