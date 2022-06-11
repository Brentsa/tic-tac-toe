import { Box } from "@mui/system"
import { FunctionComponent } from "react"
import { Row } from "../types"
import GameSquare from "./GameSquare"

const SquareRow: FunctionComponent<Row> = ({gameState, setGameState, currentTurn, startingIndex, toggleTurn}) => {

    let row = [];

    for(let i = 0; i < 3; i++){
        row.push(gameState[startingIndex + i]);
    }

    return (
        <Box display='flex' flexWrap='nowrap'>
            {row.map((value, i) => 
                <GameSquare 
                    key={i}
                    index={startingIndex + i}
                    gameState={gameState}
                    setGameState={setGameState}
                    currentTurn={currentTurn}
                    toggleTurn={toggleTurn}
                />
            )}
        </Box>
    )
}

export default SquareRow;