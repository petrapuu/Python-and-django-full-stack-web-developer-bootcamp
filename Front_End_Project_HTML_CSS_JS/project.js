var player1 = prompt("Player One: Enter Your Name, You will be Blue");
var player1Color = 'rgb(86, 151, 255)';
var player2 = prompt("Player Two: Enter Your Name, You will be Red");
var player2Color = 'rgb(237, 45, 73)';
var turns = document.getElementById("turn");

//saving columns
var circles = document.querySelectorAll('div');
var columns = [];
var column1 = $('table tr > td:nth-child(1)');
var column2 = $('table tr > td:nth-child(2)');
var column3 = $('table tr > td:nth-child(3)');
var column4 = $('table tr > td:nth-child(4)');
var column5 = $('table tr > td:nth-child(5)');
var column6 = $('table tr > td:nth-child(6)');
var column7 = $('table tr > td:nth-child(7)');

// click counters for eventhandlers
var clickCounter = 0;
var clickCounter1 = 6;
var clickCounter2 = 6;
var clickCounter3 = 6;
var clickCounter4 = 6;
var clickCounter5 = 6;
var clickCounter6 = 6;
var clickCounter7 = 6;
turns.innerHTML = "Player One: It is your turn, please pick a column to drop your blue chip.";

//  adding columns to matrix
columns.push(column1);
columns.push(column2);
columns.push(column3);
columns.push(column4);
columns.push(column5);
columns.push(column6);
columns.push(column7);

console.log(columns);

//adds event listeners to all cells of a matrix
for (var i = 0; i < columns.length; i++) {
  for (var j = 0; j < columns[i].length; j++) {
    switch (columns[i][j]) {
      case columns[0][j]:
      columns[i][j].addEventListener('click', addChip1);
        break;
      case columns[1][j]:
      columns[i][j].addEventListener('click', addChip2);
        break;
      case columns[2][j]:
      columns[i][j].addEventListener('click', addChip3);
        break;
      case columns[3][j]:
      columns[i][j].addEventListener('click', addChip4);
        break;
      case columns[4][j]:
      columns[i][j].addEventListener('click', addChip5);
        break;
      case columns[5][j]:
      columns[i][j].addEventListener('click', addChip6);
        break;
      case columns[6][j]:
      columns[i][j].addEventListener('click', addChip7);
        break;
      default: "Hola";

    }
  }
}

//tells whos turn is it
function turn(){
  if (clickCounter % 2 == 0) turns.innerHTML = "Player One: It is your turn, please pick a column to drop your blue chip.";
  if (clickCounter % 2 != 0) turns.innerHTML = "Player Two: It is your turn, please pick a column to drop your blue chip.";
}

// reports to console about winning and tells which chip add was it that led to victory.
function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

// Shows the winner on web page
function gameEnd() {
  var winner;
  if (clickCounter % 2 == 0) winner = "Player 2";
  else winner = "Player 1";
  turns.innerHTML = "<b>" + winner + " has won! Refresh your browser to play again. </b>";
}

// returns the background color of a specific cell
function returnColor(rowIndex,colIndex) {
  var table = $('table tr');
  return table.eq(rowIndex).find('td').eq(colIndex).css('background-color');
}


// Check to see if 4 inputs are the same color
function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(85, 85, 85)' && one !== undefined);
}

// checks if there is horizontal, vertical or diagonal win.
function checkIfWins() {
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
      gameEnd();
  }
}


//check for horizontal win
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

//check for vertical win
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

//check for diagonal win
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

//functions for adding chips to different columns
function addChip1(){
  clickCounter++;
  turn();
  checkIfWins();
  if (clickCounter1 >= 0) clickCounter1--;
  if (clickCounter % 2 == 0) $(columns[0][clickCounter1]).prop('class', 'red-circle');
  else $(columns[0][clickCounter1]).prop('class', 'blue-circle');

}

function addChip2(){
  clickCounter++;
  turn();
  checkIfWins();
  if (clickCounter2 >= 0) clickCounter2--;
  if (clickCounter % 2 == 0) $(columns[1][clickCounter2]).prop('class', 'red-circle');
  else $(columns[1][clickCounter2]).prop('class', 'blue-circle');
}

function addChip3(){
  clickCounter++;
  turn();
  checkIfWins();
  if (clickCounter3 >= 0) clickCounter3--;
  if (clickCounter % 2 == 0) $(columns[2][clickCounter3]).prop('class', 'red-circle');
  else $(columns[2][clickCounter3]).prop('class', 'blue-circle');
}

function addChip4(){
  clickCounter++;
  turn();
  checkIfWins();
  if (clickCounter4 >= 0) clickCounter4--;
  if (clickCounter % 2 == 0) $(columns[3][clickCounter4]).prop('class', 'red-circle');
  else $(columns[3][clickCounter4]).prop('class', 'blue-circle');
}

function addChip5(){
  clickCounter++;
  turn();
  checkIfWins();
  if (clickCounter5 >= 0) clickCounter5--;
  if (clickCounter % 2 == 0) $(columns[4][clickCounter5]).prop('class', 'red-circle');
  else $(columns[4][clickCounter5]).prop('class', 'blue-circle');
}

function addChip6(){
  clickCounter++;
  turn();
  checkIfWins();
  if (clickCounter6 >= 0) clickCounter6--;
  if (clickCounter % 2 == 0) $(columns[5][clickCounter6]).prop('class', 'red-circle');
  else $(columns[5][clickCounter6]).prop('class', 'blue-circle');
}

function addChip7(){
  clickCounter++;
  turn();
  checkIfWins();
  if (clickCounter7 >= 0) clickCounter7--;
  if (clickCounter % 2 == 0) $(columns[6][clickCounter7]).prop('class', 'red-circle');
  else $(columns[6][clickCounter7]).prop('class', 'blue-circle');
}
