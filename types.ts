
export type Turn = 1 | 2;

export type SquareValue = '' | 'X' | 'O';

export type Game = SquareValue[];

export interface GameItem {
    gameState: Game
    setGameState: (value: Game) => void
    currentTurn: number
    toggleTurn: () => void
}

export interface Row extends GameItem {
    startingIndex: number
}

export interface Square extends GameItem {
    index: number
}