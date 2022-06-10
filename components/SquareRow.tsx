import { Box } from "@mui/system"
import { FunctionComponent } from "react"
import { Row } from "../types"
import GameSquare from "./GameSquare"

const SquareRow: FunctionComponent<Row> = ({row, toggleTurn, gameState, setGameState}) => {

    return (
        <Box display='flex' flexWrap='nowrap'>
            {gameState[row].map((square, i) => 
                <GameSquare 
                    key={i}
                    index={i} 
                    row={row}
                    toggleTurn={toggleTurn}
                    gameState={gameState}
                    setGameState={setGameState}
                />
            )}
        </Box>
    )
}

export default SquareRow;