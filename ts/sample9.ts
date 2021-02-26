class Account{
    branch:string
    date:number
    ifsccode:number
    constructor(branch:string,date:number,ifsccode:number){
        this.branch=branch
        this.date=date
        this.ifsccode=ifsccode
    }
}

class fixedAccount extends Account{
    interestrate=10
    minbalance=10000
    constructor(branch,date,ifsccode){
        super(branch,date,ifsccode)
    }
}
class SavingsAccount extends Account{
    interestrate=10
    minbalance=10000
    constructor(branch,date,ifsccode){
        super(branch,date,ifsccode)
    }
}
class Accountholder{
    name:string
    balance:number
    type:string
    account:any
    constructor(name:string,balance:number,type){
        this.name=name
        this.balance=balance
        this.type=type
        if(this.type=="savings"){
        this.account=new SavingsAccount("EKM",new Date(),123)
        }
        else(this.type=="fixed")
        this.account=new fixedAccount("EKM",new Date(),123)
    }
}
let accountholderslist=[]
function createAccount(name,type,balance){
    accountholderslist.push(new Accountholder(name,type,balance))
}
let user1=new Accountholder("sajana",10000,"fixed")
console.log(user1)