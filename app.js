
var board = document.getElementById('board')
var rows = 6
var columns = 7

board.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`)
board.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`)

for (var i = 1; i <= rows * columns; i += 1) {
  var space = document.createElement('template')
  space.innerHTML = `<span class="space" id="space-${i}">${i}</span>`
  var clone = document.importNode(space.content, true)
  board.append(clone)
}

