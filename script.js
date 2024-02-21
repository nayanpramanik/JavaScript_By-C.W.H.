var prompt = require('prompt-sync')();
alert("Hello World");
console.log("Code is running...");

console.log("Code Is executed..");
var a = prompt("Enter Your Number");
var isTrue = confirm("Are you Sure")
if (isTrue) {
    console.log("You are Fine")
} else {
    console.log("Some thing is worng")
}
console.log("Your number " + a);