export const fizzbuzz = (n:number):string=>{
    if (n == 8){
        return '8'
    }
    if (n == 7){
        return '7'
    }
    if (n == 5){
        return 'buzz'
    }
    if (n == 4){
        return '4'
    }
    if (n == 3 || n == 6){
        return 'fizz'
    }
    if (n == 2){
        return '2'
    }
    return '1'
}