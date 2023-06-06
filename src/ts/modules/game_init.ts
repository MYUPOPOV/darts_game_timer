import {GameState} from './interfaces';

// Глобальная функция инициализации (настройка игры перед началом)
const gameInit = function () {

  // Основной объект состояния инициализации игры
  const initState: GameState = {
    isGameStarted: false,
    playersNumber: 1,
    avatarMode: 'classic_mode',
    gameMode: 0,
    players: {
      player_1: {
        isActive: true,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        score: 0,
      },
      player_2: {
        isActive: true,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        score: 0,
      },
      player_3: {
        isActive: false,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        score: 0,
      },
      player_4: {
        isActive: false,
        name: 'Игрок 1',
        avatarIndex: 0,
        time: 0,
        score: 0,
      },
    },
  };

  // UI элементы на странице
  const htmlElements = {
    headerInit: document.querySelector('.header_init'),
    headerGame: document.querySelector('.header_game'),

    buttonStartGame: document.getElementById('btn_gameStart') as HTMLInputElement,
    selectPlayersNumber: document.getElementById('select_playersNumber') as HTMLInputElement,
    selectAvatarMode: document.getElementById('select_avatarMode') as HTMLInputElement,
    selectScoreMode: document.getElementById('select_scoreMode') as HTMLInputElement,
    
    playerName1: document.getElementById('player_1_name') as HTMLInputElement,
    playerName2: document.getElementById('player_2_name') as HTMLInputElement,
    playerName3: document.getElementById('player_3_name') as HTMLInputElement,
    playerName4: document.getElementById('player_4_name') as HTMLInputElement,
  }

  // Инициализация const значений (settings)
  const settings = {
    avatarModes: ['classic_mode','art_mode','anime_mode'],

  }

  // Инициализация var значений (properties)
  const properties = {
  }

  // Инициализация function значений (methods)
  const methods = {
    showState: () => {
      console.log((new Date).toString().slice(16, 24))
      console.log(methods.getState())
    },

    // setState: (property: string, value: any) => {
    //   type stateKeyType = keyof typeof initState
    //   for (let key in initState) {
    //     if (key === property) {
    //       console.log(`Before: initState.${property} :  ${initState[key as stateKeyType]}`)
    //       initState[key as stateKeyType] = value
    //       console.log(typeof initState[key as stateKeyType])
    //       console.log(`After: initState.${property} :  ${initState[key as stateKeyType]}`)
    //     };
    //   }
    //   localStorage.setItem('state', JSON.stringify(initState));
    //   methods.showState()
    // },

    setState: () => {
      localStorage.setItem('state', JSON.stringify(initState));
      methods.showState()
    },

    getState: () => {
      return  JSON.parse(localStorage.getItem('state'))
    },

    gameInit: () => {
      methods.bindListeners()
      // methods.setState(initState)
    },

    bindListeners: () => {
      htmlElements.buttonStartGame.addEventListener('click', methods.startTheGame);
      htmlElements.selectPlayersNumber.addEventListener('change', methods.changePlayersNumber);
      htmlElements.selectAvatarMode.addEventListener('change', methods.changeAvatarIndex);
      htmlElements.selectScoreMode.addEventListener('change', methods.changeScoreMode);

      htmlElements.playerName1.addEventListener('change', methods.changePlayerName);
      htmlElements.playerName2.addEventListener('change', methods.changePlayerName);
      htmlElements.playerName3.addEventListener('change', methods.changePlayerName);
      htmlElements.playerName4.addEventListener('change', methods.changePlayerName);
    },

    changePlayerName: function() {
      // const player = this.id.slice(0,8)
      // console.log(player)
    },

    startTheGame: () => {
      htmlElements.headerInit.classList.add('hidden');
      htmlElements.headerGame.classList.remove('hidden');

      initState.isGameStarted = true
      // methods.setState(initState);
    },

    changePlayersNumber: () => {
      // methods.setState('playersNumber', parseInt(htmlElements.selectPlayersNumber.value) as number);
      initState.playersNumber = parseInt(htmlElements.selectPlayersNumber.value)
      methods.setState();
    },

    changeAvatarIndex: () => {
      initState.avatarMode = settings.avatarModes[parseInt(htmlElements.selectAvatarMode.value)]
      // methods.setState(initState);
    },

    changeScoreMode: () => {
      initState.gameMode = parseInt(htmlElements.selectScoreMode.value)
      // methods.setState(initState);
    }

  }

  //Поiхалы
  methods.gameInit();


// Меняем initState при изменении количества игроков, мода аватаров, режима игры (очков), а также при смене аватаров и имен игроков
// Каждый раз при смене initState у нас происходит ререндер аватарок и иконок

// Инициализация:
// Записываем в localstorage
// Обновляем: забираем из localstorage и рендерим 

// При любом чихе: запись в localstorage / читаем / рендерим

};

export { gameInit };
