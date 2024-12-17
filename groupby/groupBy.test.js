const groupBy = require('./groupBy');

const testCases = [
    {
      input: [{ age: 30, name: "Alice" }, { age: 40, name: "Bob" }, { age: 30, name: "Eve" }],
      key: "age",
      expected: {
        30: [{ age: 30, name: "Alice" }, { age: 30, name: "Eve" }],
        40: [{ age: 40, name: "Bob" }]
      }
    },
    {
      input: [{ color: "red", shape: "circle" }, { color: "blue", shape: "square" }, { color: "red", shape: "triangle" }],
      key: "color",
      expected: {
        red: [{ color: "red", shape: "circle" }, { color: "red", shape: "triangle" }],
        blue: [{ color: "blue", shape: "square" }]
      }
    },
    {
      input: [],
      key: "key",
      expected: {}
    },
    {
      input: [{ group: "A", value: 10 }, { group: "B", value: 15 }, { group: "A", value: 5 }],
      key: "group",
      expected: {
        A: [{ group: "A", value: 10 }, { group: "A", value: 5 }],
        B: [{ group: "B", value: 15 }]
      }
    },
    {
      input: [{ type: "animal", name: "dog" }, { type: "plant", name: "fern" }, { type: "animal", name: "cat" }],
      key: "type",
      expected: {
        animal: [{ type: "animal", name: "dog" }, { type: "animal", name: "cat" }],
        plant: [{ type: "plant", name: "fern" }]
      }
    }
  ];

describe('groupBy function', () => {
    testCases.forEach(({input, key,expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(groupBy(input, key)).toEqual(expected);
        }); 
    })
})