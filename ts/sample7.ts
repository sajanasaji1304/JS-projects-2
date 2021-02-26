// class Company{
//     code =101
//     displayCode(){
//         console.log(`Company Code ${this.code}`)

//     }
// }
// class Department extends Company{
//     name:string="IT"
//     decode="IT101"
//     view(){
//         console.log(`Company Code ${this.code}`)
//         console.log(`Department Name ${this.name}`)
//     }
// }
// let d=new Department()
// d.view
// d.displayCode()
// console.log(d.code)

class Company{
    constructor(){
        console.log("parent class constructor invoked")
    }
    code =101
    displayCode(){
        console.log(`Company Code ${this.code}`)

    }
}
class Department extends Company{
    name:string="IT"
    decode="IT101"
    constructor(){
        super()
        console.log("child class constructor invoked")
    }
    view(){
        console.log(`Company Code ${this.code}`)
        console.log(`Department Name ${this.name}`)
    }
}
let d=new Department()
d.view
d.displayCode()
console.log(d.code)