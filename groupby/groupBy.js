function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupValue = item[key];
    if(!result[groupValue]) {
      result[groupValue] = []
    }
    result[groupValue].push(item);
    return result;
  }, {})
} 

console.log(groupBy([
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "vegetable", name: "carrot" }
  ],
  "category"));

  module.exports = groupBy;
