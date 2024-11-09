function findTwoSum(arr, target) {
    const map = new Map();

    for(const [index, value] of arr.entries()) {
        const complement = target - value;

        if(map.has(complement)) {
            return [map.get(complement), index];
        }
        map.set(value, index);
    }
    return null;
}

// console.log(findTwoSum([2, 7, 11, 15], 9));
module.exports = findTwoSum;