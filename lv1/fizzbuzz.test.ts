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
    })
})