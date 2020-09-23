$(function () {
    //Objective 1. 
    let btn = $("<button></button>");
    $(btn).css("height", "30px").css("width","30px");
    $("btn").click(function () {
        alert("Nice message!");
    })
    $("body").append(btn);

    //Objective 2. 
    $("form").submit(function () {
        let textValue = $("input[name=inputInfo]").val();
        alert(textValue);
    });
})



