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
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return Person;
}());
var Account = /** @class */ (function () {
    function Account(actype, acname, id) {
        this.accountype = actype;
        this.accountname = acname;
        this.id = id;
    }
    return Account;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    // has a relationship
    function User(name, age, address, username, password) {
        var _this = _super.call(this, name, age, address) || this;
        // inheritance
        _this.username = username;
        _this.password = password;
        return _this;
    }
    User.prototype.createAccount = function (actype, acname, id) {
        this.account = new Account(actype, acname, id);
        console.log(Account);
    };
    return User;
}(Person));
var user1 = new User("anna", 12, "house1 ekm", "anna123", "anna");
console.log(user1);
user1.createAccount("official", "sajana", "abc");
console.log(user1);
