import Gameboard from './gameboard';
import { botPlayer } from './player';

export default function GameController(players) {
  let _board = Gameboard;
  let _movesCount = 0;
  let _isPlayer1Turn = true;
  let _activePlayer = players[0];

  const opponent = () => {
    for (let i = 0; i <  players.length; i++) {
      if(players[i].name == "bot"){
        return {bot: true, turn: i}
      }
    }
    return {bot: false, turn: null}
  }

  const switchPlayerTurn = () => {
    _activePlayer =
      _activePlayer.token === players[0].token ? players[1] : players[0];
  };

  const getActivePlayer = () => _activePlayer;

  const playRound = (index) => {
    let token = getActivePlayer().token;
    if (!_board.placeMove(token, index)) return -1;
    switchPlayerTurn();
    return { index, token };
  };

  const botPlayRound = () => {
    let token = getActivePlayer().token;
    let index = botPlayer.generateMove(_board.getBoard());

    if (!_board.placeMove(token, index)) return -1;
    switchPlayerTurn();
    return { index, token };
  };

  const checkWin = (token) => {
    const board = _board.getBoard();
    let colSize = _board.getCols();
    let isWin = true;

    /* check if there is horizonatal win */
    for (let row = 0; row < 3; row++) {
      isWin = true;
      for (let col = 0; col < 3; col++) {
        if (board[row * colSize + col] !== token) {
          isWin = false;
          continue;
        }
      }
      if (isWin) {
        return true;
      }
    }

    /* check if there is vertical win */
    for (let col = 0; col < 3; col++) {
      isWin = true;
      for (let row = 0; row < 3; row++) {
        if (board[row * colSize + col] !== token) {
          isWin = false;
          continue;
        }
      }
      if (isWin) {
        return true;
      }
    }

    /* check if there's a diagonal win */
    if (board[0] == token && board[4] == token && board[8] == token)
      return true;
    if (board[6] == token && board[4] == token && board[2] == token)
      return true;

    return false;
  };

  const updateScore = (token) => {
    if (token === 'draw') {
      players[0].ties = players[0].wins + 1;
      players[1].ties = players[1].wins + 1;
    }
    for (let i = 0; i < 2; i++) {
      if (players[i].token === token) players[i].wins = players[i].wins + 1;
    }
    /* Putting this here makes this function inpure */
    _activePlayer = players[0];
  };

  return {opponent, botPlayRound, playRound, checkWin, updateScore };
}
