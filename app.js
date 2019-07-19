
var board = document.getElementById('board')
var rows = 6
var columns = 7

board.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`)
board.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`)

for (var i = 1; i <= rows * columns; i += 1) {
  var space = document.createElement('template')
  space.innerHTML = `<span class="space" id="space-${i}">${i}</span>`
  if (i === 31) space.innerHTML = `<span class="space available" id="space-${i}">${i}</span>` 
  if (i === 32) space.innerHTML = `<span class="space available" id="space-${i}">${i}</span>` 
  if (i === 36) space.innerHTML = `<span class="space available" id="space-${i}">${i}</span>` 
  if (i === 37) space.innerHTML = `<span class="space available" id="space-${i}">${i}</span>` 
  if (i === 40) space.innerHTML = `<span class="space available" id="space-${i}">${i}</span>` 
  if (i === 41) space.innerHTML = `<span class="space available" id="space-${i}">${i}</span>` 
  if (i === 42) space.innerHTML = `<span class="space available" id="space-${i}">${i}</span>` 
  if (i === 38) space.innerHTML = `<span class="space red" id="space-${i}">${i}</span>` 
  if (i === 39) space.innerHTML = `<span class="space blue" id="space-${i}">${i}</span>` 
  var clone = document.importNode(space.content, true)
  board.append(clone)
}

// Individual Game State
// This is defined by the state of each spot (red, blue, or grey),
// which player is which (who's red, who's blue),
// who's turn it is,
// if the game is won, lost, tied, or ongoing.

// Actions
// Clear Board
// Assign names to players
// Randomly Choose starting player
// Player takes turn
// Game is won

// Events
// User clicks on spot (available, or not)
// User clicks start game

