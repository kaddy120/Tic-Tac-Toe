import { player, playerType, botPlayer } from './player';

export default function SplashScreen() {
  let player1 = null;
  let player2 = null;
  let players = [];

  const options = {
    opponent: playerType.HUMAN,
    names: { player1: '', player2: '' },
    player1Token: 'X',
    player2Token: 'O',
  };

  const humanBotToggle = document.getElementById('human-bot-toggle');
  const xoToggle = document.getElementById('X-O-toggle');
  const startBtn = document.querySelector('.splash a');
  const player2InputController = document.querySelector(
    '.form-controller + .form-controller'
  );
  const player1NameInput = document.querySelector('input#player-1');
  const player2NameInput = document.querySelector('input#player-2');

  humanBotToggle.addEventListener('change', () => {
    if (humanBotToggle.checked) {
      options.opponent = playerType.BOT;
      options.names.player2 = playerType.BOT;
      player2InputController.classList.add('hide');
    } else {
      player2InputController.classList.remove('hide');
      options.opponent = playerType.HUMAN;
      options.names.player2 = playerType.HUMAN;
    }
  });

  xoToggle.addEventListener('change', () => {
    if (xoToggle.checked) {
      options.player1Token = 'O';
      options.player2Token = 'X';
    } else {
      options.player1Token = 'X';
      options.player2Token = 'O';
    }
  });

  player1NameInput.addEventListener('change', function() {
    options.names.player1 = this.value;
  });

  player2NameInput.addEventListener('change', function() {
    options.names.player2 = this.value;
  });

  /* To-Do: make sure the game is starting */
  const start = () => {
    const _splash = document.querySelector('.splash');
    const _game = document.querySelector('.game');
    _splash.classList.add('hide');
    _game.classList.add('box--show');

 /* I don't like this code, i feel like i have repeated myself   */
    if (options.player1Token == 'X') {
      player1 = player(
        options.names.player1,
        options.player1Token,
        playerType.HUMAN
      );

      player2 = player(
        options.names.player2,
        options.player2Token,
        options.opponent
      );
    } else {
      player1 = player(
        options.names.player2,
        options.player2Token,
        playerType.HUMAN
      );
      player2 = player(
        options.names.player1,
        options.player1Token,
        options.opponent
      );
    }
    players = [player1, player2];

    console.log(players);
  };

  const getPlayers = () => players;

  const onStartBtnClick = (fn) => {
    startBtn.addEventListener('click', fn);
  };

  return { onStartBtnClick, start, getPlayers };
}

const { onStartBtnClick, start, getPlayers } = SplashScreen();

export { onStartBtnClick, start, getPlayers };
