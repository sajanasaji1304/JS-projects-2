var Student = /** @class */ (function () {
    function Student(name, age, rollno, scores, avg) {
        this.name = name;
        this.age = age;
        this.rollno = rollno;
        this.marks = scores;
        this.average = avg;
    }
    Student.prototype.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.rollno);
        console.log(this.marks);
        console.log(this.average);
    };
    return Student;
}());
var obj = new Student("Anna", 12, 1, [12, 34, 56], ((12 + 34 + 56) / 3));
obj.display();
console.log(obj);
console.log(obj.name);
obj.name = "anna thomas";
console.log(obj.name);
