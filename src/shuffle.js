function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(arr.length * Math.random());
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
}

module.exports = shuffle;