import { Grid } from "@mui/material";
import { Box } from "@mui/system"
import { NextComponentType } from "next"
import { useEffect, useState } from "react";
import { Game, GameMessage, Turn } from "../types";
import SquareRow from "./SquareRow";
import GameScore from "./GameScore";
import GameInfo from "./GameInfo";

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

enum Outcome {
    Continue,
    PlayerXWin,
    PlayerOWin,
    Tie
}

const GameLayout: NextComponentType = () => {

    const [currentTurn, setCurrentTurn] = useState<Turn>(1);
    const [gameMessage, setGameMessage] = useState<GameMessage>('');
    const [gameState, setGameState] = useState<Game>(['','','','','','','','','']);
    const [xWins, setXWins] = useState<number>(0);
    const [oWins, setOWins] = useState<number>(0);

    function toggleTurn(): void {
        currentTurn === 1 ? setCurrentTurn(2) : setCurrentTurn(1);
    }

    function checkWinner(): Outcome {
        //check for any winning combinations from either X or O
        for(let i = 0; i < win.length; i++){
            if(gameState[win[i][0]] === 'X' && gameState[win[i][1]] === 'X' && gameState[win[i][2]] === 'X') return Outcome.PlayerXWin;
            if(gameState[win[i][0]] === 'O' && gameState[win[i][1]] === 'O' && gameState[win[i][2]] === 'O') return Outcome.PlayerOWin;
        }

        //if no winners, check for any open squares and continue if there are moves left
        for(let i = 0; i < gameState.length; i++){
            if(!gameState[i]) return Outcome.Continue;
        }

        //if no moves and no winner, return a tie
        return Outcome.Tie;
    }

    function restartGame(): void {
        setGameMessage('');
        setGameState(['','','','','','','','','']);
    }

    useEffect(() => {
        switch(checkWinner()){
            case Outcome.Continue:
                break;
            case Outcome.PlayerXWin:
                setGameMessage('X wins!');
                setXWins(xWins + 1);
                break;
            case Outcome.PlayerOWin:
                setGameMessage('O wins!');
                setOWins(oWins + 1);
                break;
            case Outcome.Tie:
                setGameMessage('Tie');
                break;
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
            <Grid container spacing={2}>
                <Grid xs item></Grid>

                <Grid xs='auto' item>
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
                            gameMessage={gameMessage}
                        />
                        <SquareRow
                            startingIndex={3}
                            gameState={gameState}
                            setGameState={setGameState}
                            currentTurn={currentTurn}
                            toggleTurn={toggleTurn}
                            gameMessage={gameMessage}
                        />
                        <SquareRow
                            startingIndex={6}
                            gameState={gameState}
                            setGameState={setGameState}
                            currentTurn={currentTurn}
                            toggleTurn={toggleTurn}
                            gameMessage={gameMessage}
                        />
                    </Box>
                </Grid>

                <Grid xs item>
                    <GameScore xScore={xWins} oScore={oWins}/>
                </Grid>

                <Grid xs={12} item>
                    <GameInfo currentTurn={currentTurn} restartGame={restartGame} gameMessage={gameMessage}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default GameLayout;