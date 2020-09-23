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

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})
