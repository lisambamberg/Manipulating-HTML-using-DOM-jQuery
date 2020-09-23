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

    //Objectice 3.
    let div = document.querySelector("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = getRandomColor();
    })
    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white";
    })

    //Objective 4.
    let paragraph = document.querySelector("p");
    paragraph.addEventListener("click", function () {
        paragraph.style.color = getRandomColor();
    })

    //Objective 5.
    const btnOb5 = document.createElement("button");
    document.body.appendChild(btnOb5);
    const btnTextOb5 = document.createTextNode("My name");
    btnOb5.appendChild(btnTextOb5);
    let divOb5 = document.createElement("div");
    document.body.appendChild(divOb5);
    btnOb5.addEventListener("click", function () {
        let myName = document.createElement("span");
        myName.innerText = "Lisa";
        div.appendChild(myName);
    })

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})