let exp = '',
    number, decimal, equal, operator = false,
    parentheses;

let textview = document.forms['calculator']['textview'];

function insertNum(num) {
    exp = textview.value + num;
    textview.value = exp;
    number = true;
}

function insertOp(op) {
    if (number) {
        textview.value = exp + op;
    }
}

function insertDec(dec) {
    if (number && !decimal) {
        textview.value = exp + '.';
        decimal = true;
        operator = false;
    };
}

function insertParen(paren) {
    textview.value = exp + paren;
    parentheses = true;
    operator = true;
    number = true;
}

function equalTo() {
    exp = eval(exp);
    textview.value = exp;
    equal = true;
    decimal = false;
    number = false;

}

function clearAll() {
    exp = '';
    textview.value = exp;
}

function backspace() {
    exp = textview.value;
    exp = exp.substring(0, exp.length - 1);
    textview.value = exp;
    decimal = false;
}