const gameInit = function () {
  // Иничиализация значений
  const headerInit = document.querySelector('.header_init');
  const headerGame = document.querySelector('.header_game');
  const startGameButton = document.getElementById('btn_gameStart');
  const playersNumberSelect = document.getElementById('select_playersNumber');
  const avatarModeSelect = document.getElementById('select_avatarMode');
  const scoreModeSelect = document.getElementById('select_scoreMode');
  
  
  const avatarModes = ['classic_mode','art_mode','anime_mode'];

  // Меняем initState при изменении количества игроков, мода аватаров, режима игры (очков), а также при смене аватаров и имен игроков
  // Каждый раз при смене initState у нас происходит ререндер аватарок и иконок


  // Основной объект состояния инициализации игры
  const initState = {
    isGameStarted: false,
    playerNumber: 2,
    avatarModeIndex: 0,
    gameModeIndex: 0,
    players: {
      player_1: {
        isActive: true,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        scrore: 0,
      },
      player_2: {
        isActive: true,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        scrore: 0,
      },
      player_3: {
        isActive: false,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        scrore: 0,
      },
      player_4: {
        isActive: false,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        scrore: 0,
      },
    },
  };

  // Функции
  const changeHeader = () => {
    headerInit.classList.add('hidden');
    headerGame.classList.remove('hidden');
  };

  startGameButton.addEventListener('click', () => {});
  playersNumberSelect.addEventListener('change', () => {})
  avatarModeSelect.addEventListener('change', () => {
    console.log((<HTMLInputElement>avatarModeSelect).value)
  })
  scoreModeSelect.addEventListener('change', () => {})

};

export { gameInit };
