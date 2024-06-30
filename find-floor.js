function findFloor(arr, x) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floored = -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        //check if middle value is <= x
        if (arr[middleIdx] <= x) {
            floored = arr[middleIdx];
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    return floored;
}

module.exports = findFloor