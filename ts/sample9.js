var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(branch, date, ifsccode) {
        this.branch = branch;
        this.date = date;
        this.ifsccode = ifsccode;
    }
    return Account;
}());
var fixedAccount = /** @class */ (function (_super) {
    __extends(fixedAccount, _super);
    function fixedAccount(branch, date, ifsccode) {
        var _this = _super.call(this, branch, date, ifsccode) || this;
        _this.interestrate = 10;
        _this.minbalance = 10000;
        return _this;
    }
    return fixedAccount;
}(Account));
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(branch, date, ifsccode) {
        var _this = _super.call(this, branch, date, ifsccode) || this;
        _this.interestrate = 10;
        _this.minbalance = 10000;
        return _this;
    }
    return SavingsAccount;
}(Account));
var Accountholder = /** @class */ (function () {
    function Accountholder(name, balance, type) {
        this.name = name;
        this.balance = balance;
        this.type = type;
        if (this.type == "savings") {
            this.account = new SavingsAccount("EKM", new Date(), 123);
        }
        else
            (this.type == "fixed");
        this.account = new fixedAccount("EKM", new Date(), 123);
    }
    return Accountholder;
}());
var accountholderslist = [];
function createAccount(name, type, balance) {
    accountholderslist.push(new Accountholder(name, type, balance));
}
var user1 = new Accountholder("sajana", 10000, "fixed");
console.log(user1);
