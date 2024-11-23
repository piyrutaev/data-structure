const charFrequency = require('./charFrequency');

const testData = [
    {
      "input": "hello",
      "expected": {
        "h": 1,
        "e": 1,
        "l": 2,
        "o": 1
      }
    },
    {
      "input": "character",
      "expected": {
        "c": 2,
        "h": 1,
        "a": 2,
        "r": 2,
        "t": 1,
        "e": 1
      }
    },
    {
      "input": "aaaabbbb",
      "expected": {
        "a": 4,
        "b": 4
      }
    },
    {
      "input": "",
      "expected": {}
    },
    {
      "input": "123321",
      "expected": {
        "1": 2,
        "2": 2,
        "3": 2
      }
    },
    {
      "input": "aabbcc",
      "expected": {
        "a": 2,
        "b": 2,
        "c": 2
      }
    },
    {
      "input": "aA",
      "expected": {
        "a": 1,
        "A": 1
      }
    },
    {
      "input": "Test string with spaces",
      "expected": {
        "T": 1,
        "a": 1,
        "e": 2,
        "s": 4,
        "t": 3,
        " ": 3,
        "r": 1,
        "i": 2,
        "n": 1,
        "p": 1,
        "g": 1,
        "w": 1,
        "h": 1,
        "c": 1
      }
    }
  ]

  
describe('charFrequency function', () => {
    testData.forEach(({input, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(charFrequency(input)).toEqual(expected);
        });
    });
});  