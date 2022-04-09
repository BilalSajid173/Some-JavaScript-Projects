
var userChoice, computerChoice;


$("button").click(function () {
    userChoice = this.innerHTML;
    computerchooses();
    whoIsTheWinner();
});


function computerchooses() {

    let x = Math.floor(Math.random() * 3) + 1;

    switch (x) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
}

function whoIsTheWinner() {

    $(".user").text(userChoice);
    $(".computer").text(computerChoice);

    if (userChoice == "Rock" && computerChoice == "Paper")
        $(".winner").text("You Lose :(");
    else if (userChoice == "Rock" && computerChoice == "Scissors")
        $(".winner").text("You win :)");
    else if (userChoice == "Paper" && computerChoice == "Scissors")
        $(".winner").text("You Lose :(");
    else if (userChoice == "Paper" && computerChoice == "Rock")
        $(".winner").text("You Win :)");
    else if (userChoice == "Scissors" && computerChoice == "Rock")
        $(".winner").text("You Lose :(");
    else if (userChoice == "Scissors" && computerChoice == "Paper")
        $(".winner").text("You Win :)");
    else if (userChoice == computerChoice)
        $(".winner").text("It's A Draw !!");
}