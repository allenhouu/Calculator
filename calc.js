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
    try
    {
        document.getElementById("display").value = eval(document.getElementById("display").value);
        localStorage.setItem(document.getElementById("display").value);
    }
    catch (error)
    {
        document.getElementById("display").value = "n/a";
    }
}
function history()
{

}