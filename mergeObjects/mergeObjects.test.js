const mergeObjects = require('./mergeObjects'); 

testData = [
    {
        obj1: { a: 1, b: 2, c: 3 },
        obj2: { a: 4, b: 5, d: 6 },
        expected: { a: 5, b: 7 }
    },
    {
        obj1: { x: 10, y: 20 },
        obj2: { x: 5, y: 15, z: 25 },
        expected: { x: 15, y: 35 }
    },
    {
        obj1: { key1: 100, key2: 200 },
        obj2: { key1: 50, key2: 50, key3: 30 },
        expected: { key1: 150, key2: 250 }
    },
    {
        obj1: {},
        obj2: { a: 1 },
        expected: {} // Пустой obj1
    },
    {
        obj1: { a: 1, b: 2 },
        obj2: {},
        expected: {} // Пустой obj2
    }
];

describe('mergeObjects function', () => {
    testData.forEach(({obj1, obj2, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(mergeObjects(obj1, obj2)).toEqual(expected);
        });
    });
});