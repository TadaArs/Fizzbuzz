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
    })

})