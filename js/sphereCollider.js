
var moveX = 0
var moveY = 0
var positionX = Math.random()*800
var positionY = Math.random()*500
var positionX2 = Math.random()*800
var positionY2 = Math.random()*500
var width1 = 50
var height1 = 50
var velocity = 1
var ball1 = document.getElementById("ball1")
var ball2 = document.getElementById("ball2")
document.addEventListener("keydown", start)
document.addEventListener("keyup", stop)


setInterval(enterFrame, 1)
setInterval(randomColor, 200)

function randomColor(){
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    var a = Math.random()
    ball2.style.backgroundColor="rgb("+r+","+g+","+b+", "+a+")"
}

function start(){
    var keyboard = event.keyCode;
    if(keyboard==37){
        moveX = -1
    }else if(keyboard == 38){
        moveY = -1
    }else if(keyboard == 39){
        moveX = 1
    }else if(keyboard == 40){
        moveY = 1
    }
}

function stop(){
    var keyboard = event.keyCode;
    if(keyboard==37){
        moveX = 0
    }else if(keyboard == 38){
        moveY = 0
    }else if(keyboard == 39){
        moveX = 0
    }else if(keyboard == 40){
        moveY = 0
    }
}

function enterFrame(){
    positionX = positionX + (moveX*velocity)
    positionY = positionY + (moveY*velocity)
    ball1.style.left = positionX + "px"
    ball1.style.top = positionY + "px"
    ball2.style.left = positionX2 + "px"
    ball2.style.top = positionY2 + "px"
}