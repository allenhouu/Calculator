function clear()
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
    document.getElementById("display").value+= "√";
}
function backspace()
{

}
function enter()
{
    eval(value);
}