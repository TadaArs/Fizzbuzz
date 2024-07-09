import { fizzbuzz } from "./fizzbuzz"

describe('FizzBuzz', ()=>{
    it('should return 1', ()=>{
        //Arrange
        const number = 1

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('1')
    }),

    it('should return 2', ()=>{
        //Arrange
        const number = 2

        //Act
        const result = fizzbuzz(number)

        //Assert
        expect(result).toEqual('2')
    }),

    it('should return fizz', ()=>{
        //Arrange
        const number = 3

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('fizz')
    }),

    it('should return 4', ()=>{
        //Arrange
        const number = 4

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('4')
    }),

    it('should return buzz', ()=>{
        //Arrange
        const number = 5

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('buzz')
    }),

    it('should return fizz', ()=>{
        //Arrange
        const number = 6

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('fizz')
    }),

    it('should return 7', ()=>{
        //Arrange
        const number = 7

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('7')
    }),

    it('should return 8', ()=>{
        //Arrange
        const number = 8

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('8')
    }),

    it('should return fizz', ()=>{
        //Arrange
        const number = 9

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('fizz')
    }),

    it('should return buzz', ()=>{
        //Arrange
        const number = 10

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('buzz')
    }),

    it('should return 11', ()=>{
        //Arrange
        const number = 11

        //Act
        const result = fizzbuzz(number)

        //Assert 
        expect(result).toEqual('11')
    })

})