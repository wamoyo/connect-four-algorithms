
var board = document.getElementById('board')
var rows = 6
var columns = 7
var connect = 4

board.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`)
board.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`)

// Game State

/*
 * 1) state of each spot (red, blue, empty, available)
 * 2) who's turn is it (user, computer)
 * 3) game state (playing, red wins, blue wins, tie)
 */

var gameState = {
  spaces: []
}

for (var i = 0; i < rows * columns; i += 1) {
  gameState.spaces[i] = {type: "empty", num: i}
}

drawBoard(gameState.spaces)

function drawBoard (spaces) {
  var template = document.createElement('template')
  var spacesHTML = ""
  spaces.forEach(function(space){
    spacesHTML += makeSpaceHtml(space)
  })
  template.innerHTML = spacesHTML
  var clone = document.importNode(template.content, true)
  board.innerHTML = ""
  board.append(clone)
}

function makeSpaceHtml (space) {
  return `<span class="space ${space.type}" id="space-${space.num}">${space.num}</span>`
}



// Actions

/*
 * User clicks on available spot
 * 1) That spot becomes 'red' (or blue).
 * 2) Check if the game is over.
 * 3) Recalculate and reassign available spots.
 */

setAvailableSpaces(gameState.spaces)

function setAvailableSpaces (spaces) {
  var cols = getCols(spaces)
  cols.forEach(function (col) {
    var space = highestSpaceInCol(col)
    if (space) space.type = 'available'
  })
  drawBoard(spaces)
  cols.forEach(function (col) {
    var space = highestSpaceInCol(col)
    if (getSpaceNode(space)) {
      getSpaceNode(space).addEventListener('click', function (event) {
        makeRed(space)
      })
    }
  })
}

function getCols (spaces) {
  var cols = []
  for (var i = 0; i < columns; i += 1) {
    var col = []
    for (var j = 0; j < rows; j += 1) {
      col[j] = spaces[ (columns * j) + i]
    }
    cols[i] = col
  }
  return cols
}

// checks the column for any spaces that should be marked 'available'
function highestSpaceInCol (col) {
  for (var i = rows - 1; i >= 0; i -= 1) {
    if (col[i].type == 'available' || col[i].type == 'empty') {
      return col[i]
    }
  }
}

function getSpaceNode (space) {
  return document.getElementById(`space-${space && space.num}`)
}

function makeRed (space) {
  space.type = 'red'
  setAvailableSpaces(gameState.spaces)
}



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
 * Computer chooses from available spots
 * 1) That spot becomes 'blue' (or red).
 * 2) Check if the game is over.
 * 3) Recalculate and reassign available spots.
 *
 */

