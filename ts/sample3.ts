class Person{
    name:string
    age:number
    address:string
    
    
    constructor(name:string,age:number,address:string){
        this.name=name
        this.age=age
        this.address=address
    }
        display():void{
        console.log(this.name)
        console.log(this.age)
        console.log(this.address)

}
}
let obj:Person=new Person("Anna",12,"house2")
obj.display()
console.log(obj)
console.log(obj.name)
obj.name="anna thomas"
console.log(obj.name)