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
var polygon = /** @class */ (function () {
    function polygon(name, no_of_sides) {
        this.name = name;
    }
    polygon.prototype.area = function () {
        console.log("calculating arrea of polygon");
    };
    return polygon;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(name, ns, length, breadth) {
        var _this = _super.call(this, name, ns) || this;
        _this.length = length;
        _this.breadth = breadth;
        return _this;
    }
    rectangle.prototype.area = function () {
        console.log("area of rectangle=", this.length * this.breadth);
        // redefining the parent class in child class-overriding-runtime polymorphism
    };
    return rectangle;
}(polygon));
var r = new rectangle("rect", 4, 10, 12);
r.area();
console.log(r);
