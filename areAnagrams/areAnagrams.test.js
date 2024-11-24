const areAnagrams = require('./areAnagrams');

const testCases = [
    { str1: "listen", str2: "silent", expected: true },
    { str1: "triangle", str2: "integral", expected: true },
    { str1: "apple", str2: "papel", expected: true },
    { str1: "rat", str2: "car", expected: false },
    { str1: "hello", str2: "billion", expected: false },
    { str1: "anagram", str2: "nagaram", expected: true },
    { str1: "abc", str2: "cba", expected: true },
    { str1: "abcd", str2: "abdc", expected: true },
    { str1: "abcd", str2: "abcde", expected: false },
    { str1: "aabbcc", str2: "abcabc", expected: true },
    { str1: "aabbcc", str2: "aabbcd", expected: false },
    { str1: "", str2: "", expected: true },
    { str1: "a", str2: "a", expected: true },
    { str1: "a", str2: "b", expected: false },
];


describe('areAnagrams function', () => {
    testCases.forEach(({str1, str2, expected}, index) => {
        test(`test case ${index + 1}`, () => {
            expect(areAnagrams(str1, str2)).toEqual(expected);
        })
    })
})

