// function recieveNumbers(...args:number[]){
//     for(let i of args){
//         console.log(i)
//     }
// }
// recieveNumbers(1,2,3,4,5,6,7)

function recieveNumbers(...args:number[]|string[]){     
    // res arguments
    // for(let i of args){
    //     console.log(i)
    // }
    args.forEach((x)=>{console.log(x)})
}
recieveNumbers(1,2,3,4,5,6,7)
recieveNumbers("a","b","c","d")

