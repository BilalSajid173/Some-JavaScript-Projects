
let score = 0, time = 60;

function imageChange() {

    const allImages = document.querySelectorAll("img");

    let x = Math.floor(Math.random() * 12) + 1;
    document.querySelector("._" + x).setAttribute("src", "images/mole.jpg");
    document.querySelector("._" + x).addEventListener("click", addandremove);

    function addandremove() {
        score++;
        document.querySelector("._" + x).removeEventListener("click", addandremove);
    }

    setTimeout(function () {
        document.querySelector("._" + x).setAttribute("src", "images/white.png");
        document.querySelector("._" + x).removeEventListener("click", addandremove);
    }, 1500);

    document.querySelector(".score").innerHTML = score;
}

let timeout = setInterval(imageChange, 1600);

function countdown() {
    time--;
    document.querySelector(".time").innerHTML = time;
    if (time <= 0) {
        clearInterval(timeout);
        clearInterval(anothertimeout);
    }
}

let anothertimeout = setInterval(countdown, 1000);



//Notes
//You Can't remove an event listener if the event listener function is an anonymous one
//It must be defined separately.(https://www.javascripttutorial.net/dom/events/remove-an-event-handler/)
//setTimeout function waits for a certain interval before executing a function.
//setInterval function calls a function repeatedly after some defined interval.
//clearTimeout function removes the setInterval function.