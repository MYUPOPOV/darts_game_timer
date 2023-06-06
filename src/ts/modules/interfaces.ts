export interface PlayerInfo {
  isActive: boolean,
  name: string,
  avatarIndex: number,
  time: number,
  score: number
}

export interface GameState {
  [key: string]: boolean | string | number | PlayerInfo | object,
  isGameStarted: boolean,
  playersNumber: number,
  avatarMode: string,
  gameMode: number,
  players: {
    player_1: PlayerInfo,
    player_2: PlayerInfo,
    player_3: PlayerInfo,
    player_4: PlayerInfo
  }
}

