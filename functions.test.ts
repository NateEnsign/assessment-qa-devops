const {shuffleArray} = require('./utils')

const testArr1 = [1,2,3,4]

describe('shuffleArray should', () => {
   
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
    }),

    test('return an array of the same length as the input', () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
    })
    
})