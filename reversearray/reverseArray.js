function reverseArray(arr) {
    let reversed = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        reversed[i] = arr[arr.length - 1 - i];
    }
    return reversed;
}

module.exports = reverseArray;
// console.log(reverseArray([1, 2, 3, 4, 5]));
