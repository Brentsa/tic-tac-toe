import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import { NextComponentType } from "next"
import { useState } from "react";
import { Game, Turn } from "../types";
import SquareRow from "./SquareRow";

const GameLayout: NextComponentType = () => {

    const [currentTurn, setCurrentTurn] = useState<Turn>(1);
    const [gameState, setGameState] = useState<Game>([['','',''], ['','',''], ['','','']]);

    function toggleTurn(): void {
        currentTurn === 1 ? setCurrentTurn(2) : setCurrentTurn(1);
    }

    return (
        <Box 
            display='flex' 
            flexDirection='column' 
            justifyContent='center' 
            alignItems='center' 
            m={2}
        >
            <Box display='flex' gap={3} my={2}>
                <Typography variant="h4" fontSize={16}>Player 1 - X</Typography>
                <Typography variant="h4" fontSize={16}>Player 2 - O</Typography>
            </Box>

            <Box 
                display='flex' 
                flexDirection='column' 
                justifyContent='center' 
                alignItems='center' 
                m={2}
            >
                {gameState.map((row, i) => 
                    <SquareRow 
                        key={i}
                        row={i} 
                        toggleTurn={toggleTurn} 
                        gameState={gameState}
                        setGameState={setGameState}
                        currentTurn={currentTurn}
                    />
                )}
            </Box>

            <Box my={2}>
                <Typography variant="h3" fontSize={20}>Current Turn: Player {currentTurn}</Typography>
            </Box>
        </Box>
       
    )
}

export default GameLayout;