let exp = '',
    number, decimal, equal, operator, parentheses;

let textview = document.forms['calculator']['textview'];

function insertNum(num) {
    exp = textview.value + num;
    textview.value = exp;
    number = true;
}

function insertOp() {

}

function insertDec() {

}

function insertParen() {

}

function evaluate(exp) {
    //we are making our own because eval() has massive security problems.
}

function equalTo() {
    //do NOT use eval().  instead, use the evaluate() function you have created

}

function clearAll() {

}

function backspace() {

}

// Add event listener for buttons
const numlist = document.getElementsByClassName("number");
numlist.forEach(num => num.addEventListener('click', insertNum));

const oplist = document.getElementsByClassName("operator");
oplist.forEach(op => op.addEventListener('click', insertOp));

const parenlist = document.getElementsByClassName("paren");
parenlist.forEach(paren => paren.addEventListener('click', insertParen));

const clear = document.getElementsByClassName("clear");
clear.addEventListener('click', clearAll);

const back = document.getElementsByClassName("back");
back.addEventListener('click', backspace);

const equal = document.getElementsByClassName("equal");
equal.addEventListener('click', equalTo);

const dec = document.getElementsByClassName("dec");
dec.addEventListener('click', insertDec);