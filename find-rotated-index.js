function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        //check if middle value is target num
        if (arr[middle] === num) {
            return middle;
        }

        //determine which side is sorted properly
        if (arr[left] <= arr[middle]) {
            if (num >= arr[left] && num <= arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (num > arr[middle] && num <= arr[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    } // if num wasn't found
    return -1;
}

module.exports = findRotatedIndex