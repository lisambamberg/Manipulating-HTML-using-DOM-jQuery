$(function () {
    //Objective 1. 
    let btn = $("<button>Click for a nice message</button>");
    $("body").append(btn);
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

    //Objective 4.
    $("p").click(function () {
        $("p").css("color", getRandomColor())
    })

    //Objective 5.
    let btnOb5 = $("<button>Click for my name</button>");
    $("body").append(btnOb5);
    let divOb5 = $("<div></div>");
    $("body").append(divOb5);
    let span = $("<span>Lisa</span>")

    btnOb5.click(function () {
        $("body").append(span)
    })

    //Objective 6. 
    const friendArray = ["Frodo", "Sam", "Merry", "Pippin", "Aragorn", "Boromir", "Gimli", "Legolas", "Gandalf", "Tom Bombadil"];
    let arrIndex = 0;

    $("#friendButton").click(function () {
        if (friendArray[arrIndex]) {
            let li = $("<li></li>").text(friendArray[arrIndex])
            $("ul").append(li);
            arrIndex++
        }
    });

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})