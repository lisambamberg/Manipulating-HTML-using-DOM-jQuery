$(function () {
    //Objective 1. 
    let btn = $("<button></button>");
    $("body").append(btn);
    btn.css("height", "30px").css("width", "30px");
    btn.click(function () {
        alert("Nice message!");
    })

    //Objective 2. 
    $("#button").click(function () {
        let textValue = $("input[name=inputInfo]").val();
        alert(textValue);
    });

    //Objective 3.
    $("div").css({ "height": '100px' }); 
    $("div").css("width", "100px");
    $("div").mouseover(function () {
        $("div").css("backgroundColor", getRandomColor());
    })
    $("div").mouseout(function () {
        $("div").css("backgroundColor", "white");
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

