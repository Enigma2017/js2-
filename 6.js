var drawFraction = function(){
  const board = document.querySelector('.board');
  const fraction = document.createElement('div');
  board.appendChild(fraction);
}

const size = 8;
for (var i = 0; i < size; i = i + 1) {
  drawFraction();
  for (var j = 1; j <= size; j = j + 1) {
    drawFraction();
  }
}
