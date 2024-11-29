const objectToArray = require('./objectToArray');

const testData = [
    {
        input: { a: 1, b: 2, c: 3 },
        expected: [['a', 1], ['b', 2], ['c', 3]]
    },
    {
        input: { name: 'Alice', age: 25, city: 'Wonderland' },
        expected: [['name', 'Alice'], ['age', 25], ['city', 'Wonderland']]
    },
    {
        input: { key1: null, key2: undefined, key3: 'value' },
        expected: [['key1', null], ['key2', undefined], ['key3', 'value']]
    },
    {
        input: {},
        expected: []
    },
    {
        input: { x: 10, y: 20 },
        expected: [['x', 10], ['y', 20]]
    },
    {
        input: { foo: 'bar', baz: 'qux', nested: { a: 1 } },
        expected: [['foo', 'bar'], ['baz', 'qux'], ['nested', { a: 1 }]]
    }
];


describe('objectToArray function', () => {
    testData.forEach(({input, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(objectToArray(input)).toEqual(expected);
        });
    });
});