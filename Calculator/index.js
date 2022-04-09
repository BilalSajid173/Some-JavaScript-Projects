
/***************************************Issues**************************************/

//Decimal point can't be put after a whole number is followed by an operator and then 
//the operator is deleted.

/**********************************************Buttons*******************************/

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function (e) {
        var x = this.innerHTML;
        myFunction(x);
    });
}

/******************************************Keyboardkeys*****************************/

document.addEventListener("keypress", function (event) {
    var x = event.key;
    myFunction(x);
})


//This variable is taken to prevent more than one dec point in one number
var decimalcount = 0;


function myFunction(x) {

    switch (x) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            operatorfn(x);
            break;
        case 'C':
            decimalcount = 0;
            document.querySelector(".input-field").value = "";
            break;
        case '=':
            //used try and catch for error detection
            try {
                decimalcount = 1;
                var output = eval(document.querySelector(".input-field").value);
                output = output.toFixed(2);
                document.querySelector(".input-field").value = output;
            }
            catch (ex) {
                decimalcount = 0;
                document.querySelector(".input-field").value = 'Undefined';
            }
            break;
        case '⇦':
            var f = document.querySelector(".input-field").value.charAt(document.querySelector(".input-field").value.length - 1);
            if (f == '.')
                decimalcount = 0;  //reset it if the char deleted is a dec pt
            if (f == '/' || f == '+' || f == '-' || f == '*' || f == '%')
                decimalcount = 1;
            document.querySelector(".input-field").value = document.querySelector(".input-field").value.slice(0, -1);


            break;

        case '.':
            if (decimalcount == 1)
                break;
            decimalfunc(x);
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '(':
        case ')':
            document.querySelector(".input-field").value += x;
            break;
    }
}


/*********************************************Functions****************************/


function operatorfn(x) {

    var len = document.querySelector(".input-field").value.length;
    var t = document.querySelector(".input-field").value.charAt(len - 1);//last character

    if (t != '/' && t != '+' && t != '-' && t != '*' && t != '%') {
        document.querySelector(".input-field").value += x;
        decimalcount = 0;//reset to 0 since new no. starts after every operator
    }

    //replacing previous character if it is an operator with the new operator
    else if (t == '/' || t == '+' || t == '-' || t == '*' || t == '%') {
        var m = document.querySelector(".input-field").value.slice(0, len - 1);
        document.querySelector(".input-field").value = m + x;
    }
}

function decimalfunc(x) {

    var m = document.querySelector(".input-field").value;

    //if the first character of whole string is a decimal
    if (m == "") {
        document.querySelector(".input-field").value += "0" + x;
        decimalcount = 1;
    }

    //if the first character of every number is a decimal
    var n = m.charAt((m.length - 1));
    if (n == '+' || n == '-' || n == '*' || n == '/' || n == '%') {
        decimalcount = 1;
        document.querySelector(".input-field").value += "0" + x;
    }

    //For a decimal pt in between a number
    else if (m.lastIndexOf(x) != (m.length - 1)) {
        decimalcount = 1;
        document.querySelector(".input-field").value += x;
    }

}

//not used yet
function squareroot(x) {
    return Math.sqrt(x);
}

//for backsapce button
document.addEventListener("keydown", function (event) {
    const key = event.key;
    console.log(key);
    if (key == 'Backspace') {
        var f = document.querySelector(".input-field").value.charAt(document.querySelector(".input-field").value.length - 1);
        if (f == '.')
            decimalcount = 0;
        if (f == '/' || f == '+' || f == '-' || f == '*' || f == '%')
            decimalcount = 1;
        document.querySelector(".input-field").value = document.querySelector(".input-field").value.slice(0, -1);
    }
})

/**********************************Light Mode****************************************/

document.getElementById("check").addEventListener('change', function (e) {
    if (e.target.checked) {
        document.querySelector("h1").classList.add('h1-change');
        document.querySelector(".body").classList.add('light-bg');
        document.querySelector(".input-field").classList.add('input-change');
        document.querySelector(".main-div").classList.add('main-div-change');
        document.querySelector(".wifi-div").classList.add('wifi-div-change');
        for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
            document.querySelectorAll(".btn")[i].classList.add('btn-change');
        }
        for (let j = 0; j < document.querySelectorAll(".operator").length; j++) {
            document.querySelectorAll(".operator")[j].classList.add('operator-change');
        }
        for (let k = 0; k < document.querySelectorAll(".clear").length; k++) {
            document.querySelectorAll(".clear")[k].classList.add('clear-change');
        }
    }

    else {
        document.querySelector("h1").classList.remove('h1-change');
        document.querySelector(".body").classList.remove('light-bg');
        document.querySelector(".input-field").classList.remove('input-change');
        document.querySelector(".main-div").classList.remove('main-div-change');
        document.querySelector(".wifi-div").classList.remove('wifi-div-change');
        for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
            document.querySelectorAll(".btn")[i].classList.remove('btn-change');
        }
        for (let j = 0; j < document.querySelectorAll(".operator").length; j++) {
            document.querySelectorAll(".operator")[j].classList.remove('operator-change');
        }
        for (let k = 0; k < document.querySelectorAll(".clear").length; k++) {
            document.querySelectorAll(".clear")[k].classList.remove('clear-change');
        }
    }
})



/******************************Clock********************************** */

function timeFunc() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var meridian = "A.M.";

    if (hours == 0)
        hours = 12;
    if (hours > 12) {
        hours = hours - 12;
        meridian = "P.M.";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hours + ":" + min + ":" + sec + " " + meridian;
    document.querySelector(".wifi-div").innerHTML = time;
    /*setTimeout calls the timeFunc repeatedly after an interval of 1s*/
    setTimeout(function () { timeFunc() }, 1000);
}

timeFunc();


/***************************************************************************************/




/********************Disable arrowleft and right inside input area*********************/
//no need for this since we can set input attribute to readonly
// var input = document.querySelector(".input-field");

// input.addEventListener("keydown", function(event){

//     if(event.key == "ArrowLeft" || event.key == "ArrowRight")
//     event.preventDefault();
// })

/************************************************************************************ */