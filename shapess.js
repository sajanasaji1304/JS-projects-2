var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        this.x_cord = 0;
        this.y_cord = 0;
        this.n_sides = 4;
        this.length = l;
        this.breadth = b;
    }
    Rectangle.prototype.area = function () {
        return this.breadth * this.length;
    };
    Rectangle.prototype.draw = function (name) {
        console.log("drawing a ", name, "drawing from (", this.x_cord, ",", this.y_cord, ")");
    };
    return Rectangle;
}());
var b = new Rectangle(10, 12);
b.draw("rectangle");
console.log(b.area());
var obj = {
    x: 10, y: 30, arr: [10, 20, 30, 40]
};
// bj.x=100   read only property
var s = "123";
var i = s;
console.log(i);
