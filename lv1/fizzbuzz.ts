export const fizzbuzz = (n:number):string=>{
    if (n%5 == 0){
        if (n%3 == 0){
            return 'fizzbuzz'
        }
        return 'buzz'
    }
    if (n%3 == 0){
        return 'fizz'
    }
    return n.toString()
}