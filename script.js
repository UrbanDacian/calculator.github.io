let display = "";
let lastOperation = "";



function deleteDigit(){ //Erases the last introduced character from the screen (either digit or +/-*. )
    display = display.substring(0, display.length-1);
    show();
}

function addDigit(add){ //Adds a new digit to the end of the number/operation
    display += add.toString();
    lastOperation += "addDigit";
    show();
}

function addNumber(){ //Introduces the operator for sums
    if (lastOperation.endsWith("addDigit")){
        display += "+";
        lastOperation += "+";
    }
    else if (lastOperation.length){
        display = display.substring(0,display.length -1);
        lastOperation = lastOperation.substring(0,lastOperation.length-1)
        display += "+";
        lastOperation += "+";
    }
    show();
}

function subtractNumber(){ //Introduces the operator for subtracts
    if (lastOperation.endsWith("addDigit")){
        display += "-";
        lastOperation += "-";
    }
    else if (lastOperation.length){
        display = display.substring(0,display.length -1);
        lastOperation = lastOperation.substring(0,lastOperation.length-1)
        display += "-";
        lastOperation += "-";
    }
    show();
}

function multiplyNumber(){ //Introduces the operator for multiplies
    if (lastOperation.endsWith("addDigit")){
        display += "*";
        lastOperation += "*";
    }
    else if (lastOperation.length){
        display = display.substring(0,display.length -1);
        lastOperation = lastOperation.substring(0,lastOperation.length-1)
        display += "*";
        lastOperation += "*";
    }
    show();
}

function divideNumber(){ //Introduces the operator for divides
    if (lastOperation.endsWith("addDigit")){
        display += "/";
        lastOperation += "/";
    }
    else if (lastOperation.length){
        display = display.substring(0,display.length -1);
        lastOperation = lastOperation.substring(0,lastOperation.length-1)
        display += "/";
        lastOperation += "/";
    }
    show();
}

function resetNumbers(){ //Resets the screen to nothing
    display = lastOperation = "";
    show();
}

function changeUnits(){ // Introduces the "." for the decimals
    display += ".";
    lastOperation += ".";
    show();
}

function equal(){ // Calculates the result of the operation
    while (!lastOperation.endsWith("addDigit")){
        display = display.substring(0,display.length -1);
        lastOperation = lastOperation.substring(0,lastOperation.length-1);
    }
    display = (eval(display)).toString();
    show();
}

function show(){
    document.getElementById("displayContent").innerText = display;
}

function pStyle(option) {
    console.log(option);
    if (option === 3) {
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
        let element = document.getElementById("top");
        element.style.backgroundColor = "hsl(268, 75%, 9%)";
        element.style.color = "hsl(52, 100%, 62%)";

        element = document.getElementById("displayContent");
        element.style.backgroundColor = "hsl(268, 71%, 12%)";
        element.style.color = "hsl(52, 100%, 62%)";

        element = document.getElementById("keypad");
        element.style.backgroundColor = "hsl(268, 71%, 12%)";

        element = document.getElementsByClassName("digitBtn");
        for (let i = 0; i < element.length; ++i) {
            element[i].style.backgroundColor = "hsl(281, 89%, 26%)";
            element[i].style.boxShadow = "0px 8px 6px hsl(285, 91%, 52%)";
            element[i].style.color = "hsl(52, 100%, 62%)";
        }

        element = document.getElementsByClassName("resetBtn");
        element[0].style.backgroundColor = "hsl(268, 47%, 21%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(290, 70%, 36%)";
        element[0].style.color = "white";

        element = document.getElementsByClassName("deleteBtn");
        element[0].style.backgroundColor = "hsl(268, 47%, 21%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(290, 70%, 36%)";
        element[0].style.color = "white";

        element = document.getElementsByClassName("equalBtn");
        element[0].style.backgroundColor = "hsl(176, 100%, 44%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(177, 92%, 70%)";
        element[0].style.color = "hsl(198, 20%, 13%)";

        element = document.getElementsByClassName("radioButtons");
        element[0].style.backgroundColor = "hsl(268, 71%, 12%)";

        element = document.getElementById("btn3");
        element.style.backgroundColor = "hsl(176, 100%, 44%)";
        element = document.getElementById("btn2");
        element.style.backgroundColor = "hsl(268, 71%, 12%)";
        element = document.getElementById("btn1");
        element.style.backgroundColor = "hsl(268, 71%, 12%)"

    } else if (option === 2) {
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
        let element = document.getElementById("top");
        element.style.backgroundColor = "hsl(0, 0%, 90%)";
        element.style.color = "hsl(60, 10%, 19%)";

        element = document.getElementById("displayContent");
        element.style.backgroundColor = "hsl(0, 5%, 81%)";
        element.style.color = "hsl(60, 10%, 19%)";

        element = document.getElementById("keypad");
        element.style.backgroundColor = "hsl(0, 5%, 81%)";

        element = document.getElementsByClassName("digitBtn");
        for (let i = 0; i < element.length; ++i) {
            element[i].style.backgroundColor = "hsl(45, 7%, 89%)";
            element[i].style.boxShadow = "0px 8px 6px hsl(35, 11%, 61%)";
            element[i].style.color = "hsl(60, 10%, 19%)";
        }

        element = document.getElementsByClassName("resetBtn");
        element[0].style.backgroundColor = "hsl(185, 42%, 37%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(185, 58%, 25%)";
        element[0].style.color = "white";

        element = document.getElementsByClassName("deleteBtn");
        element[0].style.backgroundColor = "hsl(185, 42%, 37%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(185, 58%, 25%)";
        element[0].style.color = "white";

        element = document.getElementsByClassName("equalBtn");
        element[0].style.backgroundColor = "hsl(25, 98%, 40%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(25, 99%, 27%)";
        element[0].style.color = "hsl(0, 0%, 100%)";

        element = document.getElementsByClassName("radioButtons");
        element[0].style.backgroundColor = "hsl(0, 5%, 81%)";

        element = document.getElementById("btn3");
        element.style.backgroundColor = "hsl(0, 5%, 81%)";
        element = document.getElementById("btn2");
        element.style.backgroundColor = "hsl(25, 98%, 40%)";
        element = document.getElementById("btn1");
        element.style.backgroundColor = "hsl(0, 5%, 81%)"

    } else {
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
        let element = document.getElementById("top");
        element.style.backgroundColor = "hsl(222, 26%, 31%)";
        element.style.color = "white";

        element = document.getElementById("displayContent");
        element.style.backgroundColor = "hsl(268, 71%, 12%)";
        element.style.color = "white";

        element = document.getElementById("keypad");
        element.style.backgroundColor = "hsl(223, 31%, 20%)";

        element = document.getElementsByClassName("digitBtn");
        for (let i = 0; i < element.length; ++i) {
            element[i].style.backgroundColor = "hsl(30, 25%, 89%)";
            element[i].style.boxShadow = "0px 8px 6px hsl(28, 16%, 65%)";
            element[i].style.color = "hsl(60, 10%, 19%)";
        }

        element = document.getElementsByClassName("resetBtn");
        element[0].style.backgroundColor = "hsl(225, 21%, 49%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(224, 28%, 35%)";
        element[0].style.color = "white";

        element = document.getElementsByClassName("deleteBtn");
        element[0].style.backgroundColor = "hsl(225, 21%, 49%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(224, 28%, 35%)";
        element[0].style.color = "white";

        element = document.getElementsByClassName("equalBtn");
        element[0].style.backgroundColor = "hsl(6, 63%, 50%)";
        element[0].style.boxShadow = "0px 8px 6px hsl(6, 70%, 34%)";
        element[0].style.color = "hsl(0, 0%, 100%)";

        element = document.getElementsByClassName("radioButtons");
        element[0].style.backgroundColor = "hsl(223, 31%, 20%)";

        element = document.getElementById("btn3");
        element.style.backgroundColor = "hsl(223, 31%, 20%)";
        element = document.getElementById("btn2");
        element.style.backgroundColor = "hsl(223, 31%, 20%)";
        element = document.getElementById("btn1");
        element.style.backgroundColor = "hsl(6, 63%, 50%)";
    }
}