function mergeObjects(obj1, obj2) {
    const result = {};

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            result[key] = obj1[key] + obj2[key];
        }
    }
    return result;
}

module.exports = mergeObjects;