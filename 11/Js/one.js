var aboutButtom = document.getElementById("aboutButton");
var modal = document.getElementById("modal");
var body = document.getElementsByTagName("body");
var close = document.getElementById("X");
var con = document.getElementById("w");

aboutButtom.addEventListener("click",function(){
    modal.setAttribute("style","display:block");
    body[0].setAttribute("style","background:rgba(0,0,0,0.5)")
})

close.addEventListener("click",function(){
    modal.setAttribute("style","display:none");
    body[0].setAttribute("style","background:white")
})

con.addEventListener("mouseover",function(){
    con.setAttribute("style","color : #7CEC9F");
})