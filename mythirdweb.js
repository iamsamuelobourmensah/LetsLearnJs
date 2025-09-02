// //let userName = window.prompt("Please enter your name:"

// let userName ;

// // document.getElementById("Submit").onclick = function myFunction(){

// // userName = document.getElementById("userName").value;

// // console.log(userName);

// // document.getElementById("di").innerHTML = "Hello " + userName;

// // }


// // let userAge = window.prompt("Please how old are you?");
// // userAge = Number(userAge);
// // userAge+=1;
// // console.log(userAge);

// // Area of a rectangle

// let length;
// let width = 5;
// let area;
// length = Number(length);

// // document.getElementById("calculateArea").onclick = function calculateArea(){
// //     length = document.getElementById("length").value;
// // length = Number(length);

// // //     width = document.getElementById("width").value;
// // // width = Number(width);
// //     area = length * width;
// //     console.log(area);
// //     document.getElementById("areaResult").innerHTML = "Area: " + area;
// // }


// document.getElementById("calculateArea").onclick = function (){
// length = document.getElementById("legnhtInput").value;
// area = length * width;
// console.log(area);
// document.getElementById("resultArea").textContent = "Area: " + area;

// };

const counterLabel = document.getElementById("counterLabel")
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
let count = 0;


increaseButton.onclick = function(){
    count++
    counterLabel.innerText = count;
}

decreaseButton.onclick = function(){
    count--
    counterLabel.innerText = count;
}

resetButton.onclick = function(){
    count = 0
    counterLabel.innerText = count;
}