function findDifferences(obj1, obj2) {
    const result = {};

    function compareValues(key, value1, value2) {
        // Обработка массивов
        if (Array.isArray(value1) && Array.isArray(value2)) {
            if (JSON.stringify(value1) !== JSON.stringify(value2)) {
                result[key] = { obj1: value1, obj2: value2 };
            }
            return;
        }

        // Обработка вложенных объектов
        if (typeof value1 === 'object' && value1 !== null &&
            typeof value2 === 'object' && value2 !== null) {
            const nestedDifferences = findDifferences(value1, value2);
            if (Object.keys(nestedDifferences).length > 0) {
                result[key] = nestedDifferences;
            }
            return;
        }

        // Обработка примитивных значений
        if (value1 !== value2) {
            result[key] = { obj1: value1, obj2: value2 };
        }
    }

    // Собираем все уникальные ключи
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    // Сравниваем значения для каждого ключа
    keys.forEach(key => {
        const value1 = obj1[key];
        const value2 = obj2[key];
        compareValues(key, value1, value2);
    });

    return result;
}

module.exports = findDifferences;

console.log(findDifferences({ a: 1, b: 2, c: 3 }, { a: 1, b: 4, d: 5 }));
