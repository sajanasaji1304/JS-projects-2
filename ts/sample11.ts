// access specifiers-visilbilty of 
class A{
    x=100
    private y=40
    // or #y=40
    // only y can accessed in the class A itself
    protected z=90
    // can be accessed in A and B not ouside these two classes
}
let obj=new A()
console.log(obj.x)
// console.log(obj.y)
class B extends A{
    protected k=100
    constructor(){
        super()
        console.log(this.z)
    }
}
class C extends B{
    constructor(){
        super()
        console.log(this.k)
    }
}