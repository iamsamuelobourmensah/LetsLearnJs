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

// COUNTER
// const counterLabel = document.getElementById("counterLabel")
// const decreaseButton = document.getElementById("decreaseButton");
// const resetButton = document.getElementById("resetButton");
// const increaseButton = document.getElementById("increaseButton");
// let count = 0;


// increaseButton.onclick = function(){
//     count++
//     counterLabel.innerText = count;
// }

// decreaseButton.onclick = function(){
//     count--
//     counterLabel.innerText = count;
// }

// resetButton.onclick = function(){
//     count = 0
//     counterLabel.innerText = count;
// }
// RANDOM NUMBER GENERATER
// const myButton = document.getElementById("mybtn");
// const myLabel = document.getElementById("myLabel");
// const max = 6;
// const min = 1;
// let randomNumber;

// myButton.onclick = function(){

//     randomNumber = Math.floor(Math.random() *max) + min;

//     myLabel.textContent = randomNumber;
// }

const myCheckBox = document.getElementById("myCheckBox");
const VisaBtn = document.getElementById("VisaBtn");
const masterCardBtn = document.getElementById("materCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const SubmitBtn = document.getElementById("submitBtn");
const subcribeResult = document.getElementById("subcribeResult");
const paymentResult = document.getElementById("paymentResult");


SubmitBtn.onclick = function(){
if(myCheckBox.checked){
    subcribeResult.textContent = "You have subcribed";
} else{
    subcribeResult.textContent = "You have NOT subcribed";

};
if(VisaBtn.checked){    
paymentResult.textContent = "You have selected Visa as your payment method";
} else if(masterCardBtn.checked){
    paymentResult.textContent = "You have selected MasterCard as your payment method";
} else if(payPalBtn.checked){
    paymentResult.textContent = "You have selected PayPal as your payment method";
}}