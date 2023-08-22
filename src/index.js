import './styles.css';
import SplashScreen, {
  onStartBtnClick,
  start,
  getPlayers,
} from './splashScreen';
import GameScreen from './gameScreen';
import GameController from './gameController';

function ScreenController() {
  const gameScreen = GameScreen();
  const game = GameController(getPlayers());

  let _winner = document.querySelector('#win');
  let winner = document.getElementsByClassName('winner');
  let index;
  let moves = 0;
  gameScreen.paintScore(getPlayers());

  const run = () => {
    gameScreen.getBoxes().forEach((box) => {
      box.addEventListener('click', function () {
        index = gameScreen.getIndex(box);
        const token = game.playRound(index);
        if (token === -1) return;
        gameScreen.paintMove(box, token);
        moves++;

        if (game.checkWin(token)) {
          gameScreen.showEndgameScreen();
          game.updateScore(token);
          gameScreen.paintScore(getPlayers());
        } else if (moves === 9) {
          gameScreen.showEndgameScreen();
          game.updateScore('draw');
          gameScreen.paintScore(getPlayers());
        }
      });
    });
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
