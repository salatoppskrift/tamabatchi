let hunger = 100
let cleanliness = 100
let playfulness = 100
let hasBeenFed = false
let hasBeenCleaned = false
let hasBeenPlayed = false


function updateView(){
    document.getElementById("app").innerHTML=/*HTML*/`
        <div id="barContainer">
            <div class="bar" id="hungerBar"></div>
            <div class="bar" id="cleanlinessBar"></div>
            <div  class="bar" id="playfulnessBar"></div>
        </div>
        <div class="bat" id="batten">
            <img class="bat" id="batBod" src="batAnimBod.gif">
            <img class="bat" id="batFaceNeut" src="batAnimFaceNeutral.gif">
            <img class="bat" id="batFaceJoy" src="batAnimFaceJoy.gif">
            <img class="bat noBatForYou" id="batDead" src="batAnimDead.gif">
        </div>
    <br>
    <button onclick=feedBatt()>Eat</button>
    <button onclick=cleanBatt()>Clean</button>
    <button onclick=playBatt()>Play</button>
    `
}

function loop(){
    if (hunger <= 0 && cleanliness <=0 && playfulness <=0){
        document.getElementById('batDead').classList.toggle("noBatForYou")
    }
    if (!hasBeenFed) hunger -= 4
    cleanliness -= 1
    playfulness -= 2
    document.getElementById('hungerBar').style.height = hunger +"%"
    document.getElementById('cleanlinessBar').style.height = cleanliness +"%"
    document.getElementById('playfulnessBar').style.height = playfulness +"%"
}

setInterval(loop, 1000)

function feedBatt(){
    hunger += 28
    hasBeenFed=true
    document.getElementById('hungerBar').style.height = hunger +"%"
    setTimeout(setHasBeenFed, 1000)
}
function setHasBeenFed(){
    hasBeenFed=false
}
function cleanBatt(){
    cleanliness += 28
    hasBeenCleaned=true
    document.getElementById('cleanlinessBar').style.height = cleanliness +"%"
    setTimeout(setHasBeenCleaned, 1000)
}
function setHasBeenCleaned(){
    hasBeenCleaned=false
}
function playBatt(){
    playfulness += 28
    hasBeenPlayed=true
    document.getElementById('playfulnessBar').style.height = playfulness +"%"
    setTimeout(setHasBeenPlayed, 1000)
}
function setHasBeenPlayed(){
    hasBeenPlayed=false
}