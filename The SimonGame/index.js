
const buttonColors = ["red", 'blue', 'green', 'yellow'];
let gamePattern = [];
let recordUserChoice = [];
let level = 0;
let i = 0;

if (level == 0) {
    $("body").keypress(function () {
        nextSequence();
    });
}

function nextSequence() {
    level++;
    $("#level-title").text("Level: " + level);
    let colorChosen = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[colorChosen];
    gamePattern.push(buttonColors[colorChosen]);

    $("#" + buttonColors[colorChosen]).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(handleClick);

function handleClick() {

    //++-console.log(this);
    //Base Case.
    if (gamePattern.length == 0) {
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100);
        $("#level-title").text("Game Over. Press Any Key to Restart");
        return;
    }

    recordUserChoice.push(this.id);

    if (recordUserChoice[i] == gamePattern[i]) {
        playSound(this.id);
        animation(this.id);
        i++;
    }

    else if (recordUserChoice[i] != gamePattern[i]) {
        gamePattern = [];
        recordUserChoice = [];
        i = 0;
        level = 0;
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100);
        $("#level-title").text("Game Over. Press Any Key to Restart");
        //console.log(i);
        return;
    }

    if (recordUserChoice.length == gamePattern.length) {
        recordUserChoice = [];
        //console.log("here");
        i = 0;
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
};

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animation(name) {

    $("#" + name).addClass("pressed");
    setTimeout(function () {
        $("#" + name).removeClass("pressed");
    }, 100);
}