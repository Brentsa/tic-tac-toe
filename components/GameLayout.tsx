import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import { NextComponentType } from "next"
import { useEffect, useState } from "react";
import { Game, Turn } from "../types";
import SquareRow from "./SquareRow";

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const GameLayout: NextComponentType = () => {

    const [currentTurn, setCurrentTurn] = useState<Turn>(1);
    const [gameState, setGameState] = useState<Game>(['','','','','','','','','']);

    function toggleTurn(): void {
        currentTurn === 1 ? setCurrentTurn(2) : setCurrentTurn(1);
    }

    function checkWinner(): boolean {
        for(let i = 0; i < win.length; i++){
            if(gameState[win[i][0]] === 'X' && gameState[win[i][1]] === 'X' && gameState[win[i][2]] === 'X') return true;
            if(gameState[win[i][0]] === 'O' && gameState[win[i][1]] === 'O' && gameState[win[i][2]] === 'O') return true;
        }

        return false;
    }

    useEffect(() => {
        if(checkWinner()){
            console.log('We have a winner!');
        }  
    }, [gameState]);

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
                <SquareRow
                    startingIndex={0}
                    gameState={gameState}
                    setGameState={setGameState}
                    currentTurn={currentTurn}
                    toggleTurn={toggleTurn}
                />
                <SquareRow
                    startingIndex={3}
                    gameState={gameState}
                    setGameState={setGameState}
                    currentTurn={currentTurn}
                    toggleTurn={toggleTurn}
                />
                <SquareRow
                    startingIndex={6}
                    gameState={gameState}
                    setGameState={setGameState}
                    currentTurn={currentTurn}
                    toggleTurn={toggleTurn}
                />
            </Box>

            <Box my={2}>
                <Typography variant="h3" fontSize={20}>Current Turn: Player {currentTurn}</Typography>
            </Box>
        </Box>
       
    )
}

export default GameLayout;