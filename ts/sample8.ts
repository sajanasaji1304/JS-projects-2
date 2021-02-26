class Person{
    name:string
    age:number
    address:string
    constructor(name:string,age:number,address:string){
        this.name=name
        this.age=age
        this.address=address
    }
}
class Account{
    accountype:string
    accountname:string
    id:string
    constructor(actype,acname,id){
        this.accountype=actype
        this.accountname=acname
        this.id=id
    }
}
class User extends Person{
    username:string
    password:string
    account:Account       
    // has a relationship
    constructor(name,age,address,username,password){
        super(name,age,address)
        // inheritance
        this.username=username
        this.password=password
    }
createAccount(actype,acname,id){
    this.account=new Account(actype,acname,id)
    console.log(Account)
}
}
let user1=new User("anna",12,"house1 ekm","anna123","anna")
console.log(user1)
user1.createAccount("official","sajana","abc")
console.log(user1)

