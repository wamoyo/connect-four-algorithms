
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

// Game State

/*
 * 1) state of each spot (red, blue, grey, available)
 * 2) who's turn is it (user, computer)
 * 3) game state (playing, red wins, blue wins, tie)
 */

// Actions

/*
 * Clear Board
 * 1) Reset all space classes to just 'space'.
 * 2) Set available spaces class to 'available'.
 * 3) Randomly choose starting player.
 *
 * Declare End of Game
 * 1) Remove available from all spaces.
 * 2) Write 'blue' or 'red' wins, or 'tie game' to the messages.
 * 3) Show 'play again' button.
 *
 * User clicks on available spot
 * 1) That spot becomes 'red' (or blue).
 * 2) Check if the game is over.
 * 3) Recalculate and reassign available spots.
 *
 * Computer chooses from available spots
 * 1) That spot becomes 'blue' (or red).
 * 2) Check if the game is over.
 * 3) Recalculate and reassign available spots.
 *
 */

