interface IDrawer{
    x_cord
    y_cord
}
interface polygon{
    area()
}


interface Ishape extends polygon{
    n_sides
    draw(name:String)
}
class Rectangle implements Ishape,IDrawer{
    x_cord=0
    y_cord=0
    n_sides=4
    length;
    breadth;
    constructor(l,b){
        this.length=l
        this.breadth=b

    }
    area(){
        return this.breadth*this.length

    }
    draw(name:string){
        console.log("drawing a ",name,
        "drawing from (",this.x_cord,",",this.y_cord,")")


    }

}
let b=new Rectangle(10,12)
b.draw("rectangle")
console.log(b.area());
interface Point{
    readonly x:number
    readonly y:number
    arr:ReadonlyArray<number>
}
let obj:Point={
    x:10,y:30,arr:[10,20,30,40]
}
// bj.x=100   read only property
let s="123"
let i:number=<number><any>s
console.log(i)