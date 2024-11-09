const findTwoSum = require('./findTwoSum');

const testCases = [
    {
        input: { arr: [2, 7, 11, 15], target: 9 },
        expected: [0, 1]
    },
    {
        input: { arr: [3, 2, 4], target: 6 },
        expected: [1, 2]
    },
    {
        input: { arr: [3, 3], target: 6 },
        expected: [0, 1]
    },
    {
        input: { arr: [1, 5, 3, 7, 9], target: 10 },
        expected: [2, 3]
    },
    {
        input: { arr: [1, 2, 3, 4, 5], target: 10 },
        expected: null
    },
    {
        input: { arr: [], target: 5 },
        expected: null
    },
    {
        input: { arr: [0, 4, 3, 0], target: 0 },
        expected: [0, 3]
    },
    {
        input: { arr: [-1, -2, -3, -4, -5], target: -8 },
        expected: [2, 4]
    },
    {
        input: { arr: [5, 5, 5, 5], target: 10 },
        expected: [0, 1]
    }
];

describe('findTwoSum function', () => {
    testCases.forEach(({input, expected}, index) => {
        const {arr, target} = input;
        test(`test case ${index + 1}`, () => {
            expect(findTwoSum(arr, target)).toEqual(expected);
        })
    })
})