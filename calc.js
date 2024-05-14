let history = [] || JSON.parse(localStorage.getItem("calcHistory"));
let historyIndex = 0;
function clearCalc()
{
    document.getElementById("display").value = "";
}
function displayNum(value)
{
    document.getElementById("display").value += value;
}
function addition()
{
    document.getElementById("display").value+= "+";
}
function subtraction()
{
    document.getElementById("display").value+= "-";
}
function division()
{
    document.getElementById("display").value+= "/";
}
function multiplication()
{
    document.getElementById("display").value+= "*";
}
function sqrt()
{
    document.getElementById("display").value += "Math.sqrt(";
}
function exponent()
{
    document.getElementById("display").value += "**";
}
function backspace()
{
    let nums = document.getElementById("display").value;
    let sliced = nums.slice(0,-1);
    document.getElementById("display").value = sliced;
}
function decimal()
{
    document.getElementById("display").value += ".";
}
function openP()
{
    document.getElementById("display").value += "(";
}
function closeP()
{
    document.getElementById("display").value += ")";
}
function enter()
{
    let equation = document.getElementById("display").value;
    try
    {
        let answer = eval(equation);
        document.getElementById("display").value = answer;

        let entry = `${equation} = ${answer}`;
        history.push(entry);
        localStorage.setItem("calcHistory", JSON.stringify(history));
    }
    catch (error)
    {
        document.getElementById("display").value = "n/a";
    }
}

function showHSTRY()
{
    if (history.length > 0)
    {
        document.getElementById("display").value = history[historyIndex];
        historyIndex = (historyIndex + 1) % history.length;
    }
    else
        document.getElementById("display").value = "No history recorded";
}