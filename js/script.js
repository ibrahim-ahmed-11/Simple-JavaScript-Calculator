
var result = 0;

var operatorEnterd = false;

var equalEntered = false;

function EnterNumber(num) {

    if (equalEntered)
        EnterClear();

    document.getElementById("txtFormula").value += num;

    if (operatorEnterd) {
        document.getElementById("Answer").value = "";
        operatorEnterd = false;
    }

    document.getElementById("Answer").value += num;

}

function EnterOperator(operator) {

    var formulaText = document.getElementById("txtFormula").value;

    if(formulaText != ""){
        if (!(formulaText[formulaText.length - 1] === '+' || formulaText[formulaText.length - 1] === '-' || formulaText[formulaText.length - 1] === '*' || formulaText[formulaText.length - 1] === '/')){
            document.getElementById("txtFormula").value += operator;
            operatorEnterd = true;
        }
    }

}

function EnterEqual() {

    result = eval(document.getElementById("txtFormula").value);
    document.getElementById("txtResult").value += result;
    equalEntered = true;

}

function EnterClear() {

    document.getElementById("txtFormula").value = "";
    document.getElementById("txtResult").value = "";
    document.getElementById("Answer").value = "";
    operatorEnterd = false;
    equalEntered = false;

}
