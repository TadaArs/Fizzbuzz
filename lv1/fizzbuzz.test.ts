import { fizzBuzz } from "./fizzbuzz"

describe('fizzbuzz', ()=>{
    it('should return 1', ()=>{
        //Arrange
        const number = 1

        //Act
        const result = fizzBuzz(number)

        //Assert
        expect(result).toEqual('1')
    }),

    it('should return 2', ()=>{
        //Arrange
        const number = 2

        //Act
        const result = fizzBuzz(number)

        //Assert
        expect(result).toEqual('2')
    }),

    it('should return fizz', ()=>{
        //Arrange
        const number = 3

        //Act
        const result = fizzBuzz(number)

        //Assert
        expect(result).toEqual('fizz')
    }),

    it('should return 4', ()=>{
        //Arrange
        const number = 4

        //Act
        const result = fizzBuzz(number)

        //Assert
        expect(result).toEqual('4')
    }),

    it('should return buzz', ()=>{
        //Arrange
        const number = 5

        //Act
        const result = fizzBuzz(number)

        //Assert
        expect(result).toEqual('buzz')
    }),

    it('should return fizz', ()=>{
        //Arrange
        const number = 6

        //Act
        const result = fizzBuzz(number)

        //Assert
        expect(result).toEqual('fizz')
    })
})