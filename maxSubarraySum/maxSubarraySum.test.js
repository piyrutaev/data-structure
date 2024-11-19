const maxSubarraySum = require('./maxSubarraySum');

const testCases = [
    {
        input: [1, 2, 3, -2, 5],
        expected: 9, // 1 + 2 + 3 + (-2) + 5 = 9
    },
    {
        input: [-1, -2, -3, -4],
        expected: -1, // Максимальный подмассив - это [-1]
    },
    {
        input: [5, 4, -1, 7, 8],
        expected: 23, // 5 + 4 + (-1) + 7 + 8 = 23
    },
    {
        input: [1],
        expected: 1, // Максимальный подмассив - это [1]
    },
    {
        input: [],
        expected: 0, // Пустой массив
    },
    {
        input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        expected: 6, // Максимальный подмассив [4, -1, 2, 1]
    },
    {
        input: [2, -1, 2, 3, 4, -5],
        expected: 10, // Максимальный подмассив [2, -1, 2, 3, 4]
    },
    {
        input: [-1, -2, 0, -3],
        expected: 0, // Максимальный подмассив - это [0]
    },
];

describe('maxSubarraySum function', () => {
    testCases.forEach(({input, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(maxSubarraySum(input)).toEqual(expected);
        });
    });
})