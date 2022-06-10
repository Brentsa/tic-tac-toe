import { Box } from "@mui/system"
import { FunctionComponent } from "react"
import { Row } from "../types"
import GameSquare from "./GameSquare"

const SquareRow: FunctionComponent<Row> = ({rowValues, row, toggleTurn}) => {

    return (
        <Box display='flex' flexWrap='nowrap'>
            {rowValues.map((square, i) => 
                <GameSquare 
                    index={i} 
                    row={row} 
                    value={square} 
                    toggleTurn={toggleTurn} 
                    key={i}
                />
            )}
        </Box>
    )
}

export default SquareRow;