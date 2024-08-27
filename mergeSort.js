const firstArray = [3, 2, 1, 13, 8, 5, 0, 1];
const secondArray = [105, 79, 100, 110];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middleValue = Math.floor(arr.length / 2);
    const firstHalf = mergeSort(arr.slice(0, middleValue));
    const secondHalf = mergeSort(arr.slice(middleValue));
    const result = [];

    while (firstHalf.length > 0 && secondHalf.length > 0) {
        const lowestHalf = firstHalf[0] < secondHalf[0] ? firstHalf : secondHalf;
        const splitArr = lowestHalf.shift();
        result.push(splitArr);
    }
    
    return result.concat(firstHalf, secondHalf);
}

console.log('First Array Sorted: ' + mergeSort(firstArray)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log('Second Array Sorted:' + mergeSort(secondArray)); // [79, 100, 105, 110]