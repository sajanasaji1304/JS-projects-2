class NumArry{
    arr:number[]=[90,80,75,50]
    constructor(){
        let result=this.arr.filter((item)=>{
            if(item % 5==0){
            return item
        }
    })
    console.log(result)
}
}
let obj=new NumArry()