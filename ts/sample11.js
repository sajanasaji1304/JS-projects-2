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
// access specifiers-visilbilty of 
var A = /** @class */ (function () {
    function A() {
        this.x = 100;
        this.y = 40;
        // only y can accessed in the class A itself
        this.z = 90;
        // can be accessed in A and B not ouside these two classes
    }
    return A;
}());
var obj = new A();
console.log(obj.x);
// console.log(obj.y)
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.call(this) || this;
        _this.k = 100;
        console.log(_this.z);
        return _this;
    }
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = _super.call(this) || this;
        console.log(_this.k);
        return _this;
    }
    return C;
}(B));
