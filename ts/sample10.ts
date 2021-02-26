class polygon{
    name:string
    no_of_sides:Number
    constructor(name,no_of_sides){
    this.name=name
}
area():void{
    console.log("calculating arrea of polygon")
}
}
class rectangle extends polygon{
    length:number
    breadth:number
    constructor(name:string,ns:number,length:number,breadth:number){
        super(name,ns)
        this.length=length
        this.breadth=breadth
}
area():void{
    console.log("area of rectangle=",this.length*this.breadth)
    // redefining the parent class in child class-overriding-runtime polymorphism
}
}
let r=new rectangle("rect",4,10,12)
r.area()
console.log(r)