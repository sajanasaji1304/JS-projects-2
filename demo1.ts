function greetings(msg:string):string{
    console.log("hello all",msg)
    return "hello"
}
greetings("good morning")
// greetings(100)
let s=greetings("good eve")
console.log(s)
function add(num1:number,num2:number):number{
    return num1+num2
}
let result=add(10.3,12.1)
console.log(result)

function add(num1:number,num2:number=100):number{    
    // default value passed arguments
    return num1+num2
}
let result=add(10.3)
console.log(add(10,20))

function test(x:number|string){
    console.log(x)
    console.log(typeof x)
}
test(100)
test("sajana")

function test(x:number|string,y?:number){
    console.log(x)
    console.log(typeof x)
    console.log(y)
}
test(100)
test("sajana")
