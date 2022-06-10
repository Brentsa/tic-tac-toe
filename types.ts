
export type Turn = 1 | 2;

export type SquareValue = '' | 'X' | 'O';

export type Game = [
    [SquareValue, SquareValue, SquareValue],
    [SquareValue, SquareValue, SquareValue],
    [SquareValue, SquareValue, SquareValue]
]

export interface Row {
    rowValues: SquareValue[]
    toggleTurn(): void 
    row: number
}

export interface Square extends Row{
    index: number
    value: SquareValue
}