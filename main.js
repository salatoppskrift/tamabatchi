let hunger = 75
let cleanliness = 75
let playfulness = 75

function updateView(){
    document.getElementById("app").innerHTML=/*HTML*/`
        <div id="barContainer">
            <div class="bar" id="hungerBar"></div>
            <div class="bar" id="cleanlinessBar"></div>
            <div  class="bar" id="playfulnessBar"></div>
        </div>
        <div id="batten">
            <img id="batBod" src="batAnimBod.gif">
            <img id="batFaceNeut" src="batAnimFaceNeutral.gif">
            <img id="batFaceJoy" src="batAnimFaceJoy.gif">
        </div>
    <br>
    <button>Eat</button>
    <button>Clean</button>
    <button>Play</button>
    `
}

function drainHunger(){
    hunger -= 4
}