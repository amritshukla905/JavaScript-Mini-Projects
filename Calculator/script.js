const one = document.getElementById("1");
const two = document.getElementById("2");
const three= document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const clear = document.getElementById("c");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const mul = document.getElementById("*");
const div = document.getElementById("/");
const dot = document.getElementById(".");
const eql = document.getElementById("equal");
const mod = document.getElementById("%");
const display = document.getElementById("display");
const del = document.getElementById("del");
let num1 = "";
let num2 = "";
let operation = "";
let flag = 0;
let flag1 = 0;
let flag2 = 0;
let ans = 0;
clear.addEventListener("click",()=>{
    operation = "";
    flag1 = 0;
    flag2 = 0;
    ans = 0;
    flag = 0;
    num1 = "";
    num2 = "";
    display.value = "";
})
one.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "1";
         display.value = num1;
    }
    else{
        num2 += "1";
        display.value = num2;
    }
})
two.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "2";
         display.value = num1;
    }
    else{
        num2 += "2";
        display.value = num2;
    }
})
three.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "3";
         display.value = num1;
    }
    else{
        num2 += "3";
        display.value = num2;
    }
})
four.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "4";
         display.value = num1;
    }
    else{
        num2 += "4";
        display.value = num2;
    }
})
five.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "5";
         display.value = num1;
    }
    else{
        num2 += "5";
        display.value = num2;
    }
})
six.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "6";
         display.value = num1;
    }
    else{
        num2 += "6";
        display.value = num2;
    }
})
seven.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "7";
         display.value = num1;
    }
    else{
        num2 += "7";
        display.value = num2;
    }
})
eight.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "8";
         display.value = num1;
    }
    else{
        num2 += "8";
        display.value = num2;
    }
})
nine.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "9";
         display.value = num1;
    }
    else{
        num2 += "9";
        display.value = num2;
    }
})
zero.addEventListener("click",()=>{
    if(flag == 0){
         num1 += "0";
         display.value = num1;
    }
    else {
        num2 += "0";
        display.value = num2;
    }
})
plus.addEventListener("click",()=>{
    flag = 1;
    operation = "+";
    display.value = operation;
})
minus.addEventListener("click",()=>{
    flag = 1;
    operation = "-";
    display.value = operation;
})
mul.addEventListener("click",()=>{
    flag = 1;
    operation = "*";
    display.value = operation;
})
div.addEventListener("click",()=>{
    flag = 1;
    operation = "/";
    display.value = operation;
})
mod.addEventListener("click",()=>{
    flag = 1;
    operation = "%";
    display.value = operation;
})
del.addEventListener("click",()=>{
    if(flag == 0){
        if(num1 == ""){
            display.value = num1;
        }
        else{
            num1 = num1.slice(0,-1);
            display.value = num1;
        }
    }
    else{
        if(num2 == ""){
            display.value = num2;
        }
        else{
            num2 = num2.slice(0,-1);
            display.value = num2;
        }
    }
})
dot.addEventListener("click",()=>{
    if(flag == 0 && flag1 == 0){
        flag1 = 1;
        num1 += ".";
        display.value = num1;
    }
    if(flag == 1 && flag2 == 0){
        flag2 = 1;
        num2 += ".";
        display.value = num2;
    }

})
eql.addEventListener("click",()=>{
    if(operation == "+"){
        ans = parseFloat(num1)+parseFloat(num2);
        display.value = ans;
    }
    else if(operation == "-"){
        ans = parseFloat(num1)-parseFloat(num2);
        display.value = ans;
        num1 = toString(ans);
        num2 = "";
    }
    else if(operation == "*"){
        ans = parseFloat(num1)*parseFloat(num2);
        display.value = ans;
        num1 = toString(ans);
        num2 = "";
    }
    else if(operation == "/"){
        ans = parseFloat(num1)/parseFloat(num2);
        display.value = ans;
        num1 = toString(ans);
        num2 = "";
    }
    else if(operation == "%"){
        ans = parseFloat(num1)%parseFloat(num2);
        display.value = ans;
        num1 = toString(ans);
        num2 = "";
    }
})



