function sortedFrequency(arr, targetVal) {
    // Function to find the first occurrence of targetVal
    function findFirstEncounter(arr, targetVal) {
        let leftIndex = 0;
        let rightIndex = arr.length - 1;
        let firstEncounter = -1;

        while (leftIndex <= rightIndex) {
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

            if (arr[middleIndex] === targetVal) {
                firstEncounter = middleIndex;
                rightIndex = middleIndex - 1; // Continue searching to the left
            } else if (arr[middleIndex] < targetVal) {
                leftIndex = middleIndex + 1;
            } else {
                rightIndex = middleIndex - 1;
            }
        }
        return firstEncounter;
    }

    // Function to find the last occurrence of targetVal
    function findLastEncounter(arr, targetVal) {
        let leftIndex = 0;
        let rightIndex = arr.length - 1;
        let lastEncounter = -1;

        while (leftIndex <= rightIndex) {
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

            if (arr[middleIndex] === targetVal) {
                lastEncounter = middleIndex;
                leftIndex = middleIndex + 1; // Continue searching to the right
            } else if (arr[middleIndex] < targetVal) {
                leftIndex = middleIndex + 1;
            } else {
                rightIndex = middleIndex - 1;
            }
        }
        return lastEncounter;
    }

    // Get the first and last occurrences of targetVal
    const firstEncounter = findFirstEncounter(arr, targetVal);
    const lastEncounter = findLastEncounter(arr, targetVal);

    // Calculate and return the frequency of targetVal
    if (firstEncounter === -1) {
        return -1; // targetVal is not found in the array
    }
    return lastEncounter - firstEncounter + 1;
}

module.exports = sortedFrequency