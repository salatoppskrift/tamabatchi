let loopId = null
let values = [100, 100, 100]
let recentValue = [false, false, false]

function updateView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
        <div id="barContainer">
            <div class="bar" id="hungerBar"></div>
            <div class="bar" id="cleanlinessBar"></div>
            <div  class="bar" id="playfulnessBar"></div>
        </div>
        <div class="bat" id="batten">
            <img class="bat" id="batBod" src="batAnimBod.gif">
            <img class="bat" id="batFaceNeut" src="batAnimFaceNeutral.gif">
            <img class="bat noBatForYou" id="batFaceJoy" src="batAnimFaceJoy.gif">
            <img class="bat noBatForYou" id="batDead" src="batAnimDead.gif">
        </div>
    <br>
    <button class="feeder" onclick="incrementValue(0, 'hungerBar')">Eat</button>
    <button class="cleaner" onclick="incrementValue(1, 'cleanlinessBar')">Clean</button>
    <button class="player" onclick="incrementValue(2, 'playfulnessBar')">Play</button>
    `
}

function incrementValue(index, id) {
  if (isDead()) return

  values[index] += 28
  recentValue[index] = true
  if (values[index] > 100) values[index] = 100

  updateGraph(id, index)

  setTimeout(() => (recentValue[index] = false), 1000)
}

function toggleVisible(id) {
	document.getElementById(id).classList.toggle('noBatForYou')
}

function setDead() {
	toggleVisible('batDead')
	toggleVisible('batBod')
  clearInterval(loopId)
  setTimeout(startDeathAnim, 1000)
}

function startDeathAnim() {
  let image = document.createElement('img')
  image.id = 'flightsim'
  image.src = 'batAnimUndeadFlight.gif'
	toggleVisible('batFaceNeut')
	toggleVisible('batDead')
  document.getElementById('batten').appendChild(image)
  setTimeout(() => {
    document.getElementById('flightsim').remove()
  }, 1000)
}

function isDead() {
  return values[0] <= 0 && values[1] <= 0 && values[2] <= 0
}

function tickValues() {
  if (!recentValue[0]) values[0] -= 4
  if (!recentValue[1]) values[1] -= 1
  if (!recentValue[2]) values[2] -= 2
}

function updateGraphs() {
  updateGraph('hungerBar', 0)
  updateGraph('cleanlinessBar', 1)
  updateGraph('playfulnessBar', 2)
}

function updateGraph(id, index) {
  document.getElementById(id).style.height = values[index] + '%'
}

function loop() {
  if (isDead()) setDead()
  tickValues()
  updateGraphs()
}

loopId = setInterval(loop, 500)
