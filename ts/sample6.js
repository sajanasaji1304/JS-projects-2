var NumArry = /** @class */ (function () {
    function NumArry() {
        this.arr = [90, 80, 75, 50];
        var result = this.arr.filter(function (item) {
            if (item % 5 == 0) {
                return item;
            }
        });
        console.log(result);
    }
    return NumArry;
}());
var obj = new NumArry();
