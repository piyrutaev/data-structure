const sortColors = require('./sortColors');

const testData = [
    {
      "input": [2, 0, 2, 1, 1, 0],
      "expected": [0, 0, 1, 1, 2, 2]
    },
    {
      "input": [2, 0, 1],
      "expected": [0, 1, 2]
    },
    {
      "input": [1, 2, 0],
      "expected": [0, 1, 2]
    },
    {
      "input": [0],
      "expected": [0]
    },
    {
      "input": [1],
      "expected": [1]
    },
    {
      "input": [0, 0, 0],
      "expected": [0, 0, 0]
    },
    {
      "input": [1, 1, 1],
      "expected": [1, 1, 1]
    },
    {
      "input": [2, 2, 2],
      "expected": [2, 2, 2]
    },
    {
      "input": [2, 0, 2, 0, 1, 1, 0],
      "expected": [0, 0, 0, 1, 1, 2, 2]
    },
    {
      "input": [1, 0, 0, 2, 1, 2, 0],
      "expected": [0, 0, 0, 1, 1, 2, 2]
    }
  ]

  
  describe('sortColors function', () => {
    testData.forEach(({input, expected},index) => {
        test(`test case ${index + 1}`, () => {
            expect(sortColors(input)).toEqual(expected);
        });
    });
  })