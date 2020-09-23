//Objective 1. 
const btn = document.createElement("button");
const btnText = document.createTextNode("Click me! Dom button");
btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    alert("Nice message");
})

// let squareContainer = document.createElement("div");
// squareContainer.className = "container";
// document.body.appendChild(squareContainer);
// squareContainer.appendChild(div);
