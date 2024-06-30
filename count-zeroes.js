function countZeroes(arr) {
    let lowerIndex = 0;
    let upperIndex = arr.length - 1;
    let firstZeroIndex = -1;

    while (lowerIndex <= upperIndex) {
        let middleIndex = Math.floor((lowerIndex + upperIndex) / 2);

        if (arr[middleIndex] === 1) {
            lowerIndex = middleIndex + 1;
        } else {
            firstZeroIndex = middleIndex;
            upperIndex = middleIndex - 1;
        }
    }
    if (firstZeroIndex === -1) {
        return 0;
    }
    return arr.length - firstZeroIndex;
}



module.exports = countZeroes