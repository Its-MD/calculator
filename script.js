let inputOne=document.querySelector(".number1")
let inputTwo=document.querySelector(".number2")
let answer=document.querySelector(".answer")
let plus=document.querySelector(".plus")
let subtr=document.querySelector(".subtr")
let multipli=document.querySelector(".multipli")
let divi=document.querySelector(".divi")
plus.onclick=function(){
    let a=inputOne.value 
    let b=inputTwo.value
    a=parseInt(a)
    b=parseInt(b)
    // console.log(a+b)
    answer.innerHTML=a+b
    clear()
}
subtr.onclick=function(){
    let a=inputOne.value 
    let b=inputTwo.value
    a=parseInt(a)
    b=parseInt(b)
    answer.innerHTML=a-b
    clear()
}
multipli.onclick=function(){
    let a=inputOne.value 
    let b=inputTwo.value
    a=parseInt(a)
    b=parseInt(b)
    answer.innerHTML=a*b
    clear()
}
divi.onclick=function(){
    let a=inputOne.value 
    let b=inputTwo.value
    a=parseInt(a)
    b=parseInt(b)
    answer.innerHTML=a/b
    clear()
}
function clear(){
    inputOne.value=""
    inputTwo.value=""
}