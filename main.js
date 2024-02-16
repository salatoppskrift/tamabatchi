// M
let loopId
let hunger = 100
let cleanliness = 100
let playfulness = 100
let hasBeenFed = false
let hasBeenCleaned = false
let hasBeenPlayed = false
let isdead = false

// V (Status ikoner lagt til, egen class til hver for posisjonering)
function updateView() {
    document.getElementById("app").innerHTML =/*HTML*/`
        <div id="barContainer">
            <div class="bar" id="hungerBar"></div>
            <img class="eat" src="hunger.png">
            <div class="bar" id="cleanlinessBar"></div>
            <img class="bath" src="bath.png">
            <div class="bar" id="playfulnessBar"></div>
            <img class="play" src="play.png">
        </div>
        <div class="bat" id="batten">
            <img class="grassPatch" id="grassPatch" src="grass.png"><br>
            <img class="bat" id="batBod" src="batAnimBod.gif">
            <img class="bat" id="batFaceNeut" src="batAnimFaceNeutral.gif">
            <img class="bat noBatForYou" id="batFaceJoy" src="batAnimFaceJoy.gif">
            <img class="bat noBatForYou" id="batDead" src="batAnimDead.gif">
            
        </div>
    <button class="feeder" onclick=feedBatt()>Eat</button>
    <button class="cleaner" onclick=cleanBatt()>Clean</button>
    <button class="player" onclick=playBatt()>Play</button>
    `
}
// Grass patch i batten er lagt til ^, se lenger ned for mer endringer
// C
function loop() {
    if (hunger <= 0 && cleanliness <= 0 && playfulness <= 0) {
        document.getElementById('batDead').classList.toggle("noBatForYou")
        clearInterval(loopId)
        document.getElementById('batBod').classList.toggle('noBatForYou')
        isdead = true
        setTimeout(flyingBat, 1500)
    }
    if (!hasBeenFed) hunger -= 4
    cleanliness -= 1
    playfulness -= 2
    document.getElementById('hungerBar').style.height = hunger + "%"
    document.getElementById('cleanlinessBar').style.height = cleanliness + "%"
    document.getElementById('playfulnessBar').style.height = playfulness + "%"
}
// Introduserte removeChild() for å fjerne første objekt i elementet. (Grasspatch)
// Lagde også let "grabContainer"
function flyingBat() {
    let image = document.createElement("img")
    let grabContainer = document.getElementById("batten")
    image.id = "flightsim"
    image.src="batAnimUndeadFlight.gif"
    document.getElementById("batFaceNeut").classList.toggle("noBatForYou")
    document.getElementById("batDead").classList.toggle("noBatForYou")
    document.getElementById("batten").appendChild(image)
    grabContainer.removeChild(grabContainer.children[0])

    setTimeout(() => {
        document.getElementById('flightsim').remove()
    }, 1000);
}

loopId = setInterval(loop, 1000)

function feedBatt() {
    if (isdead) return;
    hunger += 28
    cleanliness -= 5
    if (hunger > 100)
        hunger = 100
    hasBeenFed = true
    setTimeout(setHasBeenFed, 1000)
    document.getElementById('hungerBar').style.height = hunger + "%"
    
}
function setHasBeenFed() {
    hasBeenFed = false
}
// Introduserte verditap ved høyere aktivitets nivå som feks at leking gjør deg skitten.
function cleanBatt() {
    if (isdead) return;
    cleanliness += 28
    playfulness -= 5
    if (cleanliness > 100)
        cleanliness = 100
    hasBeenCleaned = true
    document.getElementById('cleanlinessBar').style.height = cleanliness + "%"
    setTimeout(setHasBeenCleaned, 1000)
}
function setHasBeenCleaned() {
    hasBeenCleaned = false
}
function playBatt() {
    if (isdead) return;
    playfulness += 28
    cleanliness -= 5
    hunger -= 4
    if (playfulness > 100)
        playfulness = 100
    hasBeenPlayed = true
    document.getElementById('playfulnessBar').style.height = playfulness + "%"
    setTimeout(setHasBeenPlayed, 1000)
}
function setHasBeenPlayed() {
    hasBeenPlayed = false
}

// Bra jobba! :)
