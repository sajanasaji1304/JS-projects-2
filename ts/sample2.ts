class Student{
    name:string
    age:number
    rollno:number
    marks:number[]
    average:number
    
    
    constructor(name:string,age:number,rollno:number,scores:number[],avg:number){
        this.name=name
        this.age=age
        this.rollno=rollno
        this.marks=scores
        this.average=avg
    }
        display():void{
        console.log(this.name)
        console.log(this.age)
        console.log(this.rollno)
        console.log(this.marks)
        console.log(this.average)

}
}
let obj:Student=new Student("Anna",12,1,[12,34,56],((12+34+56)/3))
obj.display()
console.log(obj)
console.log(obj.name)
obj.name="anna thomas"
console.log(obj.name)
