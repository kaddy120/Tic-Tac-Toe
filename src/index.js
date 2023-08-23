import './styles.css';
import { onStartBtnClick, start, getPlayers } from './splashScreen';

import GameScreen from './gameScreen';
import GameController from './gameController';

function ScreenController() {
  const gameScreen = GameScreen();
  const game = GameController(getPlayers());

  let winner = document.getElementsByClassName('winner');
  let index;
  let moves = 0;
  const opponent = game.opponent();
  gameScreen.paintScore(getPlayers());

  const run = () => {
    /* If a bot is playing first, start playing here */
    if (opponent.bot && opponent.turn == 0) {
      const { index, token } = game.botPlayRound();
      const box = document.querySelector(`[id="${index}"]`);
      /* if (token === -1) return; */
      gameScreen.paintMove(box, token);
      moves++;
    }
    gameScreen.getBoxes().forEach((box) => {
      box.addEventListener('click', async function () {
        index = gameScreen.getIndex(box);
        const { token } = game.playRound(index);
        if (token === -1) return;

        gameScreen.paintMove(box, token);
        moves++;
        if (isGameOver(token)) return;

        if (opponent.bot) {
          const { index, token } = game.botPlayRound();
          const box = document.querySelector(`[id="${index}"]`);
          await sleep(400);
          /* if (token === -1) return; */
          gameScreen.paintMove(box, token);
          moves++;
          if (isGameOver(token)) return;
        }
      });
    });
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const isGameOver = (token, move) => {
    let _isGameOver = false;
    if (game.checkWin(token)) {
      gameScreen.showEndgameScreen(token);
      game.updateScore(token);
      gameScreen.paintScore(getPlayers());
      moves = 0;
      _isGameOver = true;
    } else if (moves === 9) {
      gameScreen.showEndgameScreen('draw');
      game.updateScore('draw');
      gameScreen.paintScore(getPlayers());
      moves = 0;
      _isGameOver = true;
    }
    return _isGameOver;
  };

  return run;
}

/* const run = ScreenController(); */
/* run(); */

onStartBtnClick(() => {
  start();
  console.log(getPlayers());
  const run = ScreenController();
  run();
});
