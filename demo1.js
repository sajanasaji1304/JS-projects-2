function greetings(msg) {
    console.log("hello all", msg);
    return "hello";
}
greetings("good morning");
// greetings(100)
var s = greetings("good eve");
console.log(s);
function add(num1, num2) {
    return num1 + num2;
}
var result = add(10.3, 12.1);
console.log(result);
function add(num1, num2) {
    if (num2 === void 0) { num2 = 100; }
    // default value passed arguments
    return num1 + num2;
}
var result = add(10.3);
console.log(add(10, 20));
function test(x) {
    console.log(x);
    console.log(typeof x);
}
test(100);
test("sajana");
