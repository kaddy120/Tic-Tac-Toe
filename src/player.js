const playerType = {
  HUMAN: 'human',
  BOT: 'bot',
};

function player(name, token, type = playerType.HUMAN) {
  if (name.length > 7) {
    console.error('Use a short name, less than  7 characters.');
    return -1;
  }

  return {
    wins: 0,
    ties: 0,
    type,
    name,
    token,
  };
}


const botPlayer = {
  generateMove(gameboard) {
    let index;
    let tryCount = 0;
    do {
      tryCount++;
      index = Math.floor(Math.random() * 9);
    } while (gameboard[index] !== 0 || tryCount >200);
    return index;
  },
}


export {playerType, player, botPlayer}
