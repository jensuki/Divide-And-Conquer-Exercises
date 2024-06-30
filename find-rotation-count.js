function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    //if array is already sorted and not rotated
    if (arr[left] <= arr[right]) {
        return 0;
    }

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        //if middle value is larger than next value
        //next value is smallest value/pivot point
        if (arr[middle] > arr[middle + 1]) {
            return middle + 1;
        }
        // Check if the middle value is smaller than the previous value
        // Middle value is the smallest value/pivot point
        if (arr[middle] < arr[middle - 1]) {
            return middle;
        }

        //
        if (arr[right] >= arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    //if no rotation found
    return 0;
}

module.exports = findRotationCount