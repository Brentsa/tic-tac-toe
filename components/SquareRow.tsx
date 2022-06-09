import { Box } from "@mui/system"
import { FunctionComponent } from "react"
import GameSquare from "./GameSquare"

export interface Row {
    toggleTurn(): void 
    row: number
}

const SquareRow: FunctionComponent<Row> = ({row, toggleTurn}) => {

    return (
        <Box display='flex' flexWrap='nowrap'>
            <GameSquare index={0} row={row} toggleTurn={toggleTurn}/>
            <GameSquare index={1} row={row} toggleTurn={toggleTurn}/>
            <GameSquare index={2} row={row} toggleTurn={toggleTurn}/>
        </Box>
    )
}

export default SquareRow;