import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import { NextComponentType } from "next"
import { useState } from "react";
import SquareRow from "./SquareRow";

type Turn = 1 | 2;

const GameLayout: NextComponentType = () => {

    const [currentTurn, setCurrentTurn] = useState<Turn>(1);

    function toggleTurn(): void {
        currentTurn === 1 ? setCurrentTurn(2) : setCurrentTurn(1);
    }

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m={2}>
             <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m={2}>
                <SquareRow row={0} toggleTurn={toggleTurn}/>
                <SquareRow row={1} toggleTurn={toggleTurn}/>
                <SquareRow row={2} toggleTurn={toggleTurn}/>
            </Box>
            <Box>
                <Typography variant="h3" fontSize={20}>Current Turn: Player {currentTurn}</Typography>
            </Box>
        </Box>
       
    )
}

export default GameLayout;