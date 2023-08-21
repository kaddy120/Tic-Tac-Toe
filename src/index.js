import './styles.css';
/* import EndGameScreen from './endGameScreen' */
import SplashScreen, {onStartBtnClick, start, getPlayers} from './splashScreen';
import GameScreen from './gameScreen';
import GameController from './gameController';

function ScreenController() {
  const gameScreen = GameScreen();
  const game = GameController(getPlayers());

  let _winner = document.querySelector('#win');
  let winner = document.getElementsByClassName('winner');
  let index;

  console.log(gameScreen.getBoxes())

  const run = () => {
    gameScreen.getBoxes().forEach((box) => {
      box.addEventListener('click', function () {
        index = gameScreen.getIndex(box);
        const token = game.playRound(index);
        if (token === -1) return;
        gameScreen.paintMove(box, token);

        if (game.checkWin(token)) {
          /* display endgame */
        }
      });
    });
  };

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  return run;
}

/* const run = ScreenController(); */
/* run(); */

onStartBtnClick(()=>{
 start() 
 console.log(getPlayers())
 const run = ScreenController()
 run();
})
