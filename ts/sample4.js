// function recieveNumbers(...args:number[]){
//     for(let i of args){
//         console.log(i)
//     }
// }
// recieveNumbers(1,2,3,4,5,6,7)
function recieveNumbers() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i = args_1[_a];
        console.log(i);
    }
}
recieveNumbers(1, 2, 3, 4, 5, 6, 7);
recieveNumbers("a", "b", "c", "d");
