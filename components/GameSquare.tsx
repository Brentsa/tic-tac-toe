import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { Game, Square, SquareValue } from "../types";

const GameSquare: FunctionComponent<Square> = ({index, gameState, setGameState, currentTurn, toggleTurn, gameMessage}) => {

    function handleClick(): void {
        //if there is already a value in this square or end game message, ignore the click
        if(gameState[index] || gameMessage) return;

        //Determine the current player's game value: X or 0
        let playerValue: SquareValue = currentTurn === 1 ? 'X' : 'O';

        //Map a new game state array with current values and the new X or 0 depending on whose turn it is
        const updatedArray: Game = gameState.map((value: SquareValue, i: number) => (i !== index) ? value : playerValue);

        //update the game state with new array and toggle the player turn
        setGameState(updatedArray);
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
            borderRight={index === 2 || index === 5 || index === 8 ? 2 : 0}
            borderBottom={index === 6 || index === 7 || index === 8 ? 2 : 0}
            sx={{cursor: gameMessage ? null : 'pointer'}}
        >
            <Typography variant="h1" fontSize={40}>{gameState[index]}</Typography>
        </Box>
    );
}

export default GameSquare;