// способ с созданием нового массива
function removeDuplicates(arr) {
    const result = [];
    let previous = undefined;

    for(const item of arr) {
        if(item !== previous) {
            result.push(item);
            previous = item;
        }
    }
    return result;
}

// способ без создания нового массива
function removeDuplicates2(arr) {
    if(arr.length === 0) return arr;

    let uniqueIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }
    return arr.slice(0, uniqueIndex + 1);
}

module.exports = { removeDuplicates, removeDuplicates2 };