let loopId = null
let values = [
  {
    value: 100,
    toMinus: 4,
    recent: false,
    graphId: 'hungerBar',
    buttonId: 'feeder',
    label: 'Feed',
  },
  {
    value: 100,
    toMinus: 1,
    recent: false,
    graphId: 'cleanlinessBar',
    buttonId: 'cleaner',
    label: 'Clean',
  },
  {
    value: 100,
    toMinus: 2,
    recent: false,
    graphId: 'playfulnessBar',
    buttonId: 'player',
    label: 'Play',
  },
]

function updateView() {
  document.getElementById('app').innerHTML = /*HTML*/ `
		${drawGraphs()}
		${drawBat()}
    <br>
		${drawButtons()}
    `
}

function drawGraphs() {
  let html = "<div id='barContainer'>"
  values.forEach((e) => (html += `<div class="bar" id="${e.graphId}"></div>`))
  html += '</div>'
  return html
}

function drawButtons() {
  let html = ''
  values.forEach(
    (e) =>
      (html += `<button onclick="incrementValue(${values.indexOf(e)})">${e.label}</button>`),
  )
  return html
}

function drawBat() {
  return `
        <div class="bat" id="batten">
            <img class="bat" id="batBod" src="batAnimBod.gif">
            <img class="bat" id="batFaceNeut" src="batAnimFaceNeutral.gif">
            <img class="bat noBatForYou" id="batFaceJoy" src="batAnimFaceJoy.gif">
            <img class="bat noBatForYou" id="batDead" src="batAnimDead.gif">
        </div>
	`
}

function toggleVisible(id) {
  document.getElementById(id).classList.toggle('noBatForYou')
}

function updateGraph(id, index) {
  document.getElementById(id).style.height = values[index].value + '%'
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
  let depletedCount = 0
  values.forEach((e) => {
    if (e.value <= 0) depletedCount++
  })
  return depletedCount == values.length
}

function setDead() {
  toggleVisible('batDead')
  toggleVisible('batBod')
  clearInterval(loopId)
  setTimeout(startDeathAnim, 1000)
}

function incrementValue(index) {
  if (isDead()) return

  values[index].value += 28
  if (values[index].value > 100) values[index].value = 100

  updateGraph(values[index].graphId, index)

  setTimeout(() => (values[index].recent = false), 1000)
}

function loop() {
  if (isDead()) setDead()
  values.forEach((e) => {
    let i = values.indexOf(e)
    values[i].value -= values[i].toMinus
    updateGraph(e.graphId, i)
  })
}

loopId = setInterval(loop, 500)
