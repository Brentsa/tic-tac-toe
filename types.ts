
export type Turn = 1 | 2;

export type SquareValue = '' | 'X' | 'O';

export type Game = [
    [SquareValue, SquareValue, SquareValue],
    [SquareValue, SquareValue, SquareValue],
    [SquareValue, SquareValue, SquareValue]
]

export interface GameItem {
    toggleTurn: () => void
    gameState: Game
    setGameState: (value: Game) => void
}

export interface Row extends GameItem {
    row: number
}

export interface Square extends Row {
    index: number
}