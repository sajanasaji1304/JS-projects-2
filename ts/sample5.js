// class sample{
//     x=10
//     // class variable
//     }
// }
// let s1=new sample()
// console.log(s1.x)
// s1.x=20
// // output is 20
// let s2=new sample()
// console.log(s2.x)
// // output is 10  each class is unique
// class sample{
//     x=10
//     // class variable
//     static y=10
//     //statis variable- common memory referance for all objects
//     constructor(){
//         this.x+=1
//         console.log(this.x)
//         // output is 11
//         sample.y+=1
//         console.log(sample.y)
//         // output is 11
//     }
// }
// let s1=new sample()
// // console.log(s1.x) 
// // output is 11
// let s2=new sample()
// // console.log(s2.y)
// // output is 12
// console.log(s2.x)
// function demo(){
//     console.log("demo function")
//     // function declaration
// }
// demo()
// // function expression
// let f1=function(){
//     console.log("function expression example")
// }
// f1()
function factorial(number) {
    if (number == 1) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(6));
