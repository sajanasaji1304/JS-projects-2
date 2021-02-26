// class Company{
//     code =101
//     displayCode(){
//         console.log(`Company Code ${this.code}`)
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
var Company = /** @class */ (function () {
    function Company() {
        this.code = 101;
        console.log("parent class constructor invoked");
    }
    Company.prototype.displayCode = function () {
        console.log("Company Code " + this.code);
    };
    return Company;
}());
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        var _this = _super.call(this) || this;
        _this.name = "IT";
        _this.decode = "IT101";
        console.log("child class constructor invoked");
        return _this;
    }
    Department.prototype.view = function () {
        console.log("Company Code " + this.code);
        console.log("Department Name " + this.name);
    };
    return Department;
}(Company));
var d = new Department();
d.view;
d.displayCode();
console.log(d.code);
