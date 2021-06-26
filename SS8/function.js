// console.log("lorem ipsum");
// console.log("hello");
// console.log("lorem ipsum");
// console.log("how are you today");
// console.log("lorem ipsum");
// console.log("Have a good day");

// //Khai báo hàm
// //function tenHam() {tác vụ}
// function renderLorem() {
//     console.log("lorem ipsum");
// }

// //Gọi hàm
// renderLorem();

// renderLorem();
// console.log("hello");
// renderLorem();
// console.log("how are you today");
// renderLorem();
// console.log("Have a good day");

// let message = "coding is great";
// console.log(message[0].toUpperCase() + message.slice(1));

// function upperCaseFirst(str) {
//     console.log(str[0].toUpperCase() + str.slice(1));
// }
// upperCaseFirst("lorem ipsum");
// upperCaseFirst("bye bye");

// function sum(number1, number2) {
//     console.log("Tổng 2 số",number1 + number2);
// }
// console.log(sum());


// function isEven(number) {
//     return number % 2 == 1;
// }

// setTimeout(function showDone() {
//     alert("Done");

// },4000)

let headingEl = document.getElementById("heading-1");
console.log(headingEl);

let headingClassEls = document.getElementsByClassName("heading");
console.log(headingClassEls);

console.log(document.querySelector(".heading"));

console.log(document.querySelectorAll(".heading"));

headingEl.innerHTML = "C4E 115";
headingEl.style = "color : red; font-size : 20px";

headingEl.setAttribute("id","heading-2");
headingEl.id ="heading-3";

headingEl.classList.add("bodered");

//Creat
let bodyEl = document.body;
bodyEl.innerHTML += "<h3>Thêm</h3>";

//Delete 


function ramdomColor() {
    let randIndex =  Math.floor(Math.random())
}