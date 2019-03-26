console.log("det kører")
document.addEventListener("DOMContentLoaded", start);
var dropdownItems = document.querySelector(".dropDownItems");
var burgerContainer = document.querySelector(".burgerContainer");
var body = document.querySelector("body");


function myFunction(x) {
    x.classList.toggle("change");
}

//EVENTLISTENER ON HAMBURGER ICON
burgerContainer.addEventListener("click", function () {
    console.log("click");
    //IF MENU ISNT SHOWN, THEN SHOW
    if (!(dropdownItems.style.display == "block")) {
        console.log("dropdown shown");
        dropdownItems.style.display = "block";
    } else {
        //IF MENU IS SHOWN, THEN HIDE
        console.log("dropdown hidden");
        dropdownItems.style.display = "none";
    }
});

//-----------------------------spil----------------------------------

function start() {
    console.log("start")

    document.querySelector("#win_1").classList.add("hide");
    document.querySelector("#win_2").classList.add("hide");
    document.querySelector("#lose_1").classList.add("hide");
    document.querySelector("#lose_2").classList.add("hide");

}

document.querySelector("#quiz1 .option1").addEventListener("click", lose1);
document.querySelector("#quiz1 .option2").addEventListener("click", lose1);
document.querySelector("#quiz1 .option3").addEventListener("click", win1);

document.querySelector("#quiz2 .option1").addEventListener("click", lose2);
document.querySelector("#quiz2 .option2").addEventListener("click", win2);
document.querySelector("#quiz2 .option3").addEventListener("click", lose2);

function lose1() {
    console.log("lose1")
    document.querySelector("#game_1").classList.add("hide");
    document.querySelector("#lose_1").classList.remove("hide");

}

function win1() {
    console.log("win1")
    document.querySelector("#game_1").classList.add("hide");
    document.querySelector("#win_1").classList.remove("hide");

}

function lose2() {
    console.log("lose2")
    document.querySelector("#game_2").classList.add("hide");
    document.querySelector("#lose_2").classList.remove("hide");

}

function win2() {
    console.log("win2")
    document.querySelector("#game_2").classList.add("hide");
    document.querySelector("#win_2").classList.remove("hide");

}

document.querySelector("#quiz1 .button").addEventListener("click", restart1);
document.querySelector("#quiz1 .buttonlose").addEventListener("click", restart1);
document.querySelector("#quiz2 .button").addEventListener("click", restart2);
document.querySelector("#quiz2 .buttonlose").addEventListener("click", restart2);

function restart1() {
    console.log("restart1")
    document.querySelector("#lose_1").classList.add("hide");
    document.querySelector("#win_1").classList.add("hide");
    document.querySelector("#game_1").classList.remove("hide");

}

function restart2() {
    console.log("restart2")
    document.querySelector("#lose_2").classList.add("hide");
    document.querySelector("#win_2").classList.add("hide");
    document.querySelector("#game_2").classList.remove("hide");

}
