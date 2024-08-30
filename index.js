
let resultElement=document.getElementById("result")

function getValues()
{
    let a=document.getElementById("num-one").value
    let b=document.getElementById("num-two").value
    num1=parseFloat(a) || 0  //defaults 0 if the conversion is Not A Number
    num2=parseFloat(b) || 0
    return [num1,num2]
}

function add()
{
    let [num1,num2]=getValues()
    let sum=num1+num2   
    resultElement.innerText="Sum: "+sum
}

function subtract()
{
    let [num1,num2]=getValues()
    let subtraction=num1-num2
    resultElement.innerText="Subtraction: "+subtraction
}

function multiply()
{
    let [num1,num2]=getValues()
    let multiplication=num1*num2
    resultElement.innerText="Multiplication: "+multiplication
}

function divide()
{
    let [num1,num2]=getValues()
    let division=num1/num2
    
    if(num1%num2!=0)
        division=division.toFixed(3)
    
    resultElement.innerText="Division: "+division
}

function reset()
{
    let inputA=document.getElementById("num-one")
    let inputB=document.getElementById("num-two")
    inputA.value=""
    inputB.value=""
    resultElement.innerText="Result: "
}

console.log("the code runs")