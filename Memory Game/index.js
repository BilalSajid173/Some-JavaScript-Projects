

/**************Crating Array******************/
const imageArray = [
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "pizza", img: "images/pizza.png" }
]


/*******Randomly shuffling the array using fisher-yates algo**********/
imageArray.sort(shuffle(imageArray));
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const gridDisplay = document.querySelector(".grid");
let currentCards = [];  //keeps track of the latest two cards
let currentCardsId = [];//their ids
const cardsUsed = [];//cards that have already been matched.

createBoard();

function createBoard() {

    for (let i = 0; i < 12; i++) {

        var addBlank = document.createElement("img");
        addBlank.setAttribute("src", "images/blank.png");
        addBlank.setAttribute("id", i);
        gridDisplay.appendChild(addBlank);
        addBlank.addEventListener("click",flipcard);
    }
}

function flipcard() {

    var id = this.getAttribute("id");
    this.setAttribute("src", imageArray[id].img);

    currentCards.push(imageArray[id].name);
    currentCardsId.push(id);

    if (currentCards.length == 2) {
        setTimeout(function () { findAMatch() }, 300)
    }
}

function findAMatch() {


    //querySelectorAll does not return a live collection of all items, which means that
    //if i created the allCards array outside this block, then i won't be able to 
    //add/remove event listener to an item from array using DOM.(read more at mdn)
    const allCards = document.querySelectorAll("img");
    
    let optionOne = currentCardsId[0];
    let optionTwo = currentCardsId[1];
    let result = document.querySelector(".result");

    if (optionOne == optionTwo) {
        alert("you clicked the same card");
        allCards[optionOne].setAttribute("src", "images/blank.png");
    }

    else if (currentCards[0] == currentCards[1]) {
        alert("Found a match");
        allCards[optionOne].setAttribute("src", "images/white.png");
        allCards[optionTwo].setAttribute("src", "images/white.png");
        allCards[optionOne].removeEventListener("click", flipcard);
        allCards[optionTwo].removeEventListener("click", flipcard);
        cardsUsed.push(currentCards[0]);
    }

    else {
        allCards[optionOne].setAttribute("src", "images/blank.png");
        allCards[optionTwo].setAttribute("src", "images/blank.png");
    }

    currentCards = [];
    currentCardsId = [];
    result.textContent = cardsUsed.length;
    if (cardsUsed.length == allCards.length / 2) {
        result.textContent = "You won!!!";
    }
}


