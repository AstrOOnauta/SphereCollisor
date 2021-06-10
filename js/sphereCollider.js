window.alert("Bem-vindo ao Colisor de Esferas! \n\nPegue a esfera brilhante 30 vezes e vença o jogo!")

var mainball = document.getElementById("mainball")
var ball1 = document.getElementById("ball1")
var ball2 = document.getElementById("ball2")
var square = document.getElementById("square")
var container = document.getElementById("containerGame")
var containerW = container.offsetWidth
var containerH = container.offsetHeight
var mainballW = mainball.offsetWidth
var mainballH = mainball.offsetHeight
var ball2W = ball2.offsetWidth
var ball2H = ball2.offsetHeight
var moveX = 0
var moveY = 0
var positionX = Math.random()*containerW
var positionY = Math.random()*(containerH-50)
var positionX2 = Math.random()*containerW
var positionY2 = Math.random()*(containerH-50)
var width1 = 50
var height1 = 50
var width2 = 40
var height2 = 40
var velocity = 6
var score = 0;
var time;

//events control
setInterval(randomColor, 200)
setInterval(checkCollision, 1)
setInterval(teleport, 1)

//Load support for the game work
function start(){
    document.addEventListener("keydown", startMove)
    document.addEventListener("keyup", stopMove)
    time = requestAnimationFrame(enterFrame)
}
//load randomly the balls in the page and update the moviment, size and velocity in the bigball (mainball)
function enterFrame(){
    positionX = positionX + (moveX*velocity)
    positionY = positionY + (moveY*velocity)
    mainball.style.left = positionX + "px"
    mainball.style.top = positionY + "px"
    mainball.style.width = width1 + "px"
    mainball.style.height = height1 + "px"
    square.style.width = width2 + "px"
    square.style.height = height2 + "px"
    ball1.style.width = width1 + "px"
    ball1.style.height = height1 + "px"
    ball2.style.left = positionX2 + "px"
    ball2.style.top = positionY2 + "px"

    requestAnimationFrame(enterFrame)
}

//shiny color system in ball2
function randomColor(){
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    var a = Math.random()
    ball2.style.backgroundColor="rgb("+r+","+g+","+b+", "+a+")"
}
//moviment system using the direction arrows from keyboard
function startMove(event){
    var keyboard = event.keyCode;
    var bigball = {x: positionX, y: positionY, width: width1, height: height1}
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

function stopMove(event){
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

//moviment system using the direction arrows in the display
function startTouchLeft(){
    moveX = -1 
}
function stopTouchLeft(){
    moveX = 0
}
function startTouchUp(){
    moveY = -1
}
function stopTouchUp(){
    moveY = 0
}
function startTouchRight(){
    moveX = 1
}
function stopTouchRight(){
    moveX = 0
}
function startTouchDown(){
    moveY = 1
}
function stopTouchDown(){
    moveY = 0
}

//Teleport the bigball when it touch the game border
function teleport(){
    if(positionX<(mainballW-60)){
        moveX = -1
        positionX = (containerW-mainballW)
    }
    if(positionY<(mainballH-60)){
        moveY = -1
        positionY = (containerH-mainballH)
    }
    if(positionX >(containerW-mainballW)){
        moveX = 1
        positionX = 0
    }
    if(positionY >(containerH-mainballH)){
        moveY = 1
        positionY = 0
    }
}

//collision detection system between the bigball (mainball) and the shinyball (ball2)
function checkCollision(){
    var mainball = {x: positionX, y: positionY, width: width1, height: height1}
    var ball2 = {x: positionX2, y: positionY2, width: 20, height: 20}
    if(mainball.x < ball2.x + ball2.width &&
        mainball.x + mainball.width > ball2.x && 
        mainball.y < ball2.y + ball2.height &&
        mainball.y + mainball.height > ball2.y){
            positionX2 = Math.random()*containerW
                if(positionX2 >= (containerW-ball2W) ){
                    positionX2 = (containerW-ball2W)
                }
            positionY2 = Math.random()*(containerH-50)
            width1 += 3
            height1 += 3
            width2 += 3
            height2 += 3
            score = score + 1
            velocity += 0.1
            document.getElementById("score").innerHTML= score
                if(score == 30){
                    alert("Você venceu!")
                    window.location.reload()
                }
    }
}

window.addEventListener("load", start)