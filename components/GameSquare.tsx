import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { Square } from "../types";

const GameSquare: FunctionComponent<Square> = ({index, row, toggleTurn, gameState, setGameState, currentTurn}) => {

    function handleClick(): void {
        console.log(`Row: ${row}, Index: ${index}`);

        //if there is already a value in this square, ignore the click
        if(gameState[row][index]) return;

        //Update the game state array with the player's move
        gameState[row][index] = currentTurn === 1 ? 'X' : 'O';

        setGameState(gameState);

        //Change the player turn after the state update
        toggleTurn();
    }

    return (
        <Box 
            height={80} 
            width={80} 
            component='button' 
            onClick={handleClick}
            borderTop={2}
            borderLeft={2}
            borderRight={index === 2 ? 2 : 0}
            borderBottom={row === 2 ? 2 : 0}
            sx={{cursor: 'pointer'}}
        >
            <Typography variant="h1" fontSize={40}>{gameState[row][index]}</Typography>
        </Box>
    );
}

export default GameSquare;