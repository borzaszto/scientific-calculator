// Numbers
const number_1 = "1";
const number_2 = "2";
const number_3 = "3";
const number_4 = "4";
const number_5 = "5";
const number_6 = "6";
const number_7 = "7";
const number_8 = "8";
const number_9 = "9";
const number_0 = "0";

// Number buttons
const number_1_button = document.getElementById("number_1_button");
const number_2_button = document.getElementById("number_2_button");
const number_3_button = document.getElementById("number_3_button");
const number_4_button = document.getElementById("number_4_button");
const number_5_button = document.getElementById("number_5_button");
const number_6_button = document.getElementById("number_6_button");
const number_7_button = document.getElementById("number_7_button");
const number_8_button = document.getElementById("number_8_button");
const number_9_button = document.getElementById("number_9_button");
const number_0_button = document.getElementById("number_0_button");

const clear_button = document.getElementById("clear_button");

let history = document.getElementById("history");

clear_button.onclick = () => history.innerHTML = "";
let isEmpty = history.innerHTML === "";

number_1_button.onclick = () => {
    isEmpty ? history.innerHTML = number_1 : history.innerHTML += number_1;
}

number_2_button.onclick = () => {
    isEmpty ? history.innerHTML = number_2 : history.innerHTML += number_2;
}

number_3_button.onclick = () => {
    isEmpty ? history.innerHTML = number_3 : history.innerHTML += number_3;
}

number_4_button.onclick = () => {
    isEmpty ? history.innerHTML = number_4 : history.innerHTML += number_4;
}

number_5_button.onclick = () => {
    isEmpty ? history.innerHTML = number_5 : history.innerHTML += number_5;
}

number_6_button.onclick = () => {
    isEmpty ? history.innerHTML = number_6 : history.innerHTML += number_6;
}

number_7_button.onclick = () => {
    isEmpty ? history.innerHTML = number_7 : history.innerHTML += number_7;
}

number_8_button.onclick = () => {
    isEmpty ? history.innerHTML = number_8 : history.innerHTML += number_8;
}

number_9_button.onclick = () => {
    isEmpty ? history.innerHTML = number_9 : history.innerHTML += number_9;
}

// Number 0 not ready yet
number_0_button.onclick = () => {
    isEmpty ? history.innerHTML = number_0 : history.innerHTML += number_0;
}