export const fizzBuzz = (n:number):string =>{
    if (n%3 == 0){
        return (n%5 == 0)?"fizzbuzz":"fizz"
    }
    if (n%5 == 0){
        return "buzz"
    }
    return n.toString()
}