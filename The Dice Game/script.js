function myFunction() {
    var num1 = Math.random();
    num1 = Math.floor(num1 * 6) + 1;
    var imgloc1 = "images/dice" + num1 + ".png";
    document.querySelector(".img1").setAttribute("src", imgloc1);

    var num2 = Math.random();
    num2 = Math.floor(num2 * 6) + 1;
    var imgloc2 = "images/dice" + num2 + ".png";
    document.querySelector(".img2").setAttribute("src", imgloc2);

    if (num1 > num2) {
        document.querySelector(".container h1").innerHTML = "🥞Player 1 wins";
    }
    else if (num2 > num1) {
        document.querySelector(".container h1").innerHTML = "Player 2 wins🥞";
    }
    else {
        document.querySelector(".container h1").innerHTML = "Draw";
    }
}

myFunction();

