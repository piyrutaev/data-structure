function areAnagrams(str1, str2) {

    if (str1.length !== str2.length) return false;

    const charCount = new Map();

    for (const char of str1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (!charCount.has(char)) return false;
        charCount.set(char, charCount.get(char) - 1);
        if (charCount.get(char) < 0) return false;
    }
    return true;
}

module.exports = areAnagrams;