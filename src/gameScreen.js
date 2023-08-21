import Gameboard from './gameboard'

export default function GameScreen() {
  let _board = Gameboard();
  let _results = document.querySelector('.results');
  let _restartButton = document.querySelector('#restart');
  let _turnX = document.querySelector('.player-X');
  let _turnO = document.querySelector('.player-O');
  const _boxes = document.querySelectorAll('.box');

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
    _changeTurn(token)
  };

  const updateScores = () => {};

  const restart = () => {
      _board.clearBoard();
      _changeTurn('O');
      _boxes.forEach((box) => {
        box.innerHTML = '<h2></h2>';
      });
  };

  _restartButton.onclick = restart;
  const getBoxes = () => _boxes;

  return {getIndex, restart, updateScores, getBoxes, paintMove };
}
