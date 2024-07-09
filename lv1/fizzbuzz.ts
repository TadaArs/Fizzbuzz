export const fizzbuzz = (n:number):string=>{
    let respond = ""
    if (n%3 == 0){
        respond += 'fizz'
    }
    if (n%5 == 0 ){
        respond += 'buzz'
    }
    if (respond != "")
        return respond
    
    return n.toString()
}