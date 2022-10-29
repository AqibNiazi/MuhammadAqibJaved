//                                           Task 1



var num1 = prompt("Enter a number:")
function square(num) {
    return num * num;
}
function cube(num) {
    return num * num * num;
}
document.write("Square :" + square(num1));
document.write("<br>")
document.write("cube :" + cube(num1));


//                                              Task 2


var name = prompt("Enter your name:")
var className = prompt("Enter class");


function welcome(name, className) {
    document.write(`Hello ${name} welcome to ${className} class.`)
}
welcome(name, className);


//                                       Task 2 with Function Expression


var name = prompt("Enter your name:")
var className = prompt("Enter class");


let welcome = function (name, className) {
    document.write(`Hello ${name} welcome to ${className} class.`)
}
welcome(name, className);
