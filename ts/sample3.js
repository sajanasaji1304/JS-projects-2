var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.address);
    };
    return Person;
}());
var obj = new Person("Anna", 12, "house2");
obj.display();
console.log(obj);
console.log(obj.name);
obj.name = "anna thomas";
console.log(obj.name);
