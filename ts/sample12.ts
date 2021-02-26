function add(x:number,y:number):void
function add(x:string,y:string):void
function add(x:number,y:number,z:number):void
function add(x:number|string,y:number|string,z?:number){
    // console.log("add function")
    if(typeof x=="number" && typeof y=="number" && z==undefined){
        console.log(x+y)
    }
    else if(z!=undefined && typeof x=="number" && typeof y=="number"){
        console.log(x+y+z)
    }
    else if(typeof x=="string" && typeof y=="string"){
        console.log(x+y)
}
}
add(1,2)
add(1,2,3)
add("a","b")