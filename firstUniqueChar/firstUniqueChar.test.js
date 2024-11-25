const firstUniqueChar = require('./firstUniqueChar');

const testCases = [
    { input: "leetcode", expected: 0 }, // 'l' is the first unique character
    { input: "loveleetcode", expected: 2 }, // 'v' is the first unique character
    { input: "aabb", expected: -1 }, // no unique characters
    { input: "abcabc", expected: -1 }, // no unique characters
    { input: "swiss", expected: 1 }, // 'w' is the first unique character
    { input: "racecar", expected: 3 }, // 'r' is the first unique character
    { input: "xxyyzz", expected: -1 }, // no unique characters
    { input: "abcdefg", expected: 0 }, // 'a' is the first unique character
    { input: "aabbccddeeffg", expected: 12 }, // 'g' is the first unique character
    { input: "a", expected: 0 }, // 'a' is the first unique character
    { input: "", expected: -1 }, // empty string, no unique characters
];

describe('firstUniqueChar function', () => {
    testCases.forEach(({input, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(firstUniqueChar(input)).toEqual(expected);
        });
    });
});