const reverseArray = require("./reverseArray");

const testData = [
    {
        input: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }],
        expected: [{ id: 3, name: "Charlie" }, { id: 2, name: "Bob" }, { id: 1, name: "Alice" }]
    },
    {
        input: [{ id: 1, name: "One" }, { id: 2, name: "Two" }],
        expected: [{ id: 2, name: "Two" }, { id: 1, name: "One" }]
    },
    {
        input: [],
        expected: []
    },
    {
        input: [{ id: 1, name: "Single" }],
        expected: [{ id: 1, name: "Single" }]
    },
    {
        input: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        expected: [{ id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }]
    }
];

describe('reverseArray function', () => {
    testData.forEach(({input, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(reverseArray(input)).toEqual(expected);
        })
    })
})