export default function EndGameScreen() {
  let _endGameScreen = document.querySelector('.win');
  let _results = document.querySelector('.results');

  const showEndgameScreen = () => {
    _results.classList.remove('hide');
    _endGameScreen.classList.add('box--show');
  };

  return {showEndgameScreen}
}


function GameEndScreen() {
  const endGameScreen = document.querySelector('#win');

  function restartGame() {}

  endGameScreen.addEventListener('click', () => {
    endGameScreen.classList.remove('box--show');
  });
  endGameScreen.addEventListener('keypress', (event) => {
    console.log(event);
  });
}
