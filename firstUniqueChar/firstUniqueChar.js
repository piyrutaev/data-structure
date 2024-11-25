// возвращает индекс первого уникального символа

function firstUniqueChar(str) {
    const charCount = new Map();

    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let i = 0; i < str.length; i++) {
        if (charCount.get(str[i]) === 1) return i;
    }
    return -1;
}

module.exports = firstUniqueChar;

/**
 * создать новую хэш-таблицу
 * заполнить ее строкой с количеством вхождений
 * проход по строке с поиском в хэш-таблице уникального символа
 * вернуть -1, если нет уникальных символов
 */