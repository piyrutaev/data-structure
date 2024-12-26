const findDifferences = require('./findDifferences');

const testCases = [
    {
      description: "Идентичные объекты",
      obj1: { a: 1, b: 2 },
      obj2: { a: 1, b: 2 },
      expected: {}
    },
    {
      description: "Различия в значениях примитивов",
      obj1: { a: 1, b: 2 },
      obj2: { a: 1, b: 3 },
      expected: { b: { obj1: 2, obj2: 3 } }
    },
    {
      description: "Отсутствие ключа в одном из объектов",
      obj1: { a: 1, b: 2 },
      obj2: { a: 1 },
      expected: { b: { obj1: 2, obj2: undefined } }
    },
    {
      description: "Ключ, присутствующий только в одном объекте",
      obj1: { a: 1 },
      obj2: { a: 1, b: 3 },
      expected: { b: { obj1: undefined, obj2: 3 } }
    },
    {
      description: "Сравнение вложенных объектов",
      obj1: { a: 1, b: { x: 10, y: 20 } },
      obj2: { a: 1, b: { x: 10, y: 30 } },
      expected: { b: { y: { obj1: 20, obj2: 30 } } }
    },
    {
      description: "Сравнение вложенных объектов с отсутствующими ключами",
      obj1: { a: 1, b: { x: 10 } },
      obj2: { a: 1, b: { x: 10, y: 30 } },
      expected: { b: { y: { obj1: undefined, obj2: 30 } } }
    },
    {
      description: "Сравнение массивов",
      obj1: { a: [1, 2, 3] },
      obj2: { a: [1, 2, 4] },
      expected: { a: { obj1: [1, 2, 3], obj2: [1, 2, 4] } }
    },
    {
      description: "Обработка пустых объектов",
      obj1: {},
      obj2: {},
      expected: {}
    },
    {
      description: "Пустой объект и непустой объект",
      obj1: {},
      obj2: { a: 1, b: 2 },
      expected: {
        a: { obj1: undefined, obj2: 1 },
        b: { obj1: undefined, obj2: 2 }
      }
    },
    {
      description: "Сложные вложенные структуры",
      obj1: {
        a: 1,
        b: { x: 10, y: { z: 20 } },
        c: [1, 2, 3]
      },
      obj2: {
        a: 1,
        b: { x: 10, y: { z: 30 } },
        c: [1, 2, 4]
      },
      expected: {
        b: {
          y: {
            z: { obj1: 20, obj2: 30 }
          }
        },
        c: { obj1: [1, 2, 3], obj2: [1, 2, 4] }
      }
    }
  ];
  
describe('findDifferences function', () => {
    testCases.forEach(({description, obj1, obj2, expected}) => {
        test(`${description}`, () => {
            expect(findDifferences(obj1, obj2)).toEqual(expected);
        })
    })
})  