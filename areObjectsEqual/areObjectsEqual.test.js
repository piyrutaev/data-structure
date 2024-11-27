const areObjectsEqual = require('./areObjectsEqual');

const testCases = [
    {
        description: "Identical primitive values",
        obj1: 5,
        obj2: 5,
        expected: true
    },
    {
        description: "Different primitive values",
        obj1: 5,
        obj2: 10,
        expected: false
    },
    {
        description: "Identical objects",
        obj1: { a: 1, b: 2 },
        obj2: { a: 1, b: 2 },
        expected: true
    },
    {
        description: "Different objects with same keys but different values",
        obj1: { a: 1, b: 2 },
        obj2: { a: 1, b: 3 },
        expected: false
    },
    {
        description: "Objects with different keys",
        obj1: { a: 1, b: 2 },
        obj2: { a: 1, c: 2 },
        expected: false
    },
    {
        description: "Nested identical objects",
        obj1: { a: { b: 2 }, c: 3 },
        obj2: { a: { b: 2 }, c: 3 },
        expected: true
    },
    {
        description: "Nested objects with different values",
        obj1: { a: { b: 2 }, c: 3 },
        obj2: { a: { b: 3 }, c: 3 },
        expected: false
    },
    {
        description: "Identical arrays",
        obj1: [1, 2, 3],
        obj2: [1, 2, 3],
        expected: true
    },
    {
        description: "Different arrays",
        obj1: [1, 2, 3],
        obj2: [1, 2, 4],
        expected: false
    },
    {
        description: "Identical objects with null values",
        obj1: { a: null, b: null },
        obj2: { a: null, b: null },
        expected: true
    },
    {
        description: "Different objects with null values",
        obj1: { a: null, b: 2 },
        obj2: { a: null, b: 3 },
        expected: false
    },
    {
        description: "Comparing an object with null",
        obj1: { a: 1 },
        obj2: null,
        expected: false
    },
    {
        description: "Comparing null with itself",
        obj1: null,
        obj2: null,
        expected: true
    },
];

describe('areObjectsEqual function', () => {
    testCases.forEach(({description, obj1, obj2, expected}, index) => {
        test(`test case ${index + 1 + ' ' + description}`, () => {
            expect(areObjectsEqual(obj1, obj2)).toEqual(expected);
        });
    });
});