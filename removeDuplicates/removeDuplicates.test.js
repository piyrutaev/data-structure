const { removeDuplicates, removeDuplicates2 } = require('./removeDuplicates');

const testCases = [
    {
        input: [1, 1, 2, 2, 3, 4, 4, 5],
        expected: [1, 2, 3, 4, 5]
    },
    {
        input: [1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4, 5]
    },
    {
        input: [1, 1, 1, 1, 1],
        expected: [1]
    },
    {
        input: [],
        expected: []
    },
    {
        input: [1, 2, 2, 3, 3, 3, 4],
        expected: [1, 2, 3, 4]
    },
    {
        input: ['a', 'a', 'b', 'b', 'c'],
        expected: ['a', 'b', 'c']
    },
    {
        input: [null, null, null, 1, 1],
        expected: [null, 1]
    },
    {
        input: [true, true, false, false, true],
        expected: [true, false, true]
    }
];

describe('removeDuplicates function', () => {
    testCases.forEach(({input, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(removeDuplicates2(input)).toEqual(expected);
        })
    })
})