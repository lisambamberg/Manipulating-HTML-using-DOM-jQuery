document.addEventListener("DOMContentLoaded", function () {
//Objective 1. 
const btn = document.createElement("button");
const btnText = document.createTextNode("Click me! Dom button");
btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    alert("Nice message");
})

//Objective 2.
let inputText = document.querySelector("#inputText");
htmlBtn.addEventListener("click", function () {
    alert(inputText.value);
})
})