var restart = document.querySelector('#b');
var squares = document.querySelectorAll('td');

// function for clearing the board when restarting the game
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent= '';
  }
}

restart.addEventListener('click', clearBoard);

//function for changing X's to O's and O's to empty cells.
function changeMarker(){
  if (this.textContent === '') this.textContent = 'X';
  else if (this.textContent === 'X') this.textContent = 'O';
  else this.textContent = '';
}


//sets event listeners to all the squares on a table
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker);
}
