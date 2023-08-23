import Gameboard from './gameboard';
/* import { player } from './player'; */
import { getPlayers } from './splashScreen';

export default function GameScreen() {
  let _board = Gameboard;
  let _results = document.querySelector('.results');
  let _restartButton = document.querySelector('#restart');
  let _turnX = document.querySelector('.player-X');
  let _turnO = document.querySelector('.player-O');
  let _winner = document.querySelector('#winner');

  let _scoreX = document.querySelector('.score-X h2');
  let _scoreO = document.querySelector('.score-O h2');
  let _ties = document.querySelector('.score-ties h2');
  const players = getPlayers();
  let _nameX = document.querySelector('.score-X #name');
  let _nameO = document.querySelector('.score-O #name');
  _nameO.innerHTML = `${players[1].name}`;
  _nameX.innerHTML = `${players[0].name}`;
  /* let _endGameScreen = document.querySelector('.win'); */
  const _boxes = document.querySelectorAll('.box');
  const endGameScreen = document.querySelector('#win');

  endGameScreen.addEventListener('click', () => {
    endGameScreen.classList.remove('box--show');
    setTimeout(restart, 500);
  });

  endGameScreen.addEventListener('keypress', (event) => {
    console.log(event);
  });

  const _changeTurn = (token) => {
    if (token == 'X') {
      _turnO.classList.add('playing');
      _turnX.classList.remove('playing');
    } else {
      _turnO.classList.remove('playing');
      _turnX.classList.add('playing');
    }
  };

  const getIndex = (box) => {
    const id = box.getAttribute('id');
    return parseInt(id) - 1;
  };

  const paintMove = (box, token) => {
    box.innerHTML = `<h2 class="${token}">${token}</h2>`;
    _changeTurn(token);
  };

  const updateScores = () => { };

  const restart = () => {
    _board.clearBoard();
    _changeTurn('O');
    /* also change turns in logic level*/
    _boxes.forEach((box) => {
      box.innerHTML = '<h2></h2>';
    });
  };

  _restartButton.onclick = restart;
  const getBoxes = () => _boxes;

  const showEndgameScreen = (winner) => {
    endGameScreen.classList.add('box--show');
    if (winner == 'draw') {
      _winner.innerHTML = "It's a draw."
      return;
    }

    _winner.innerHTML = `&#127882; Player <span id="winner">${winner}</span> Won! &#127881`
  };

  const paintScore = (players) => {
    _scoreX.innerHTML = players[0].wins;
    _scoreO.innerHTML = players[1].wins;
    _ties.innerHTML = players[1].ties;
  };

  return {
    getIndex,
    restart,
    updateScores,
    getBoxes,
    paintMove,
    showEndgameScreen,
    paintScore,
  };
}
