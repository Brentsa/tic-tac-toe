import { FunctionComponent } from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { GameInfo } from "../types";

const GameInfo: FunctionComponent<GameInfo> = ({gameMessage, restartGame, currentTurn}) => {

    return (
        <Box my={2} display='flex' justifyContent='center'>
            {gameMessage ?
                <Box display='flex' flexDirection='column' alignItems='center' gap={4}>
                    <Typography variant="h2" fontSize={26}>{gameMessage}</Typography>
                    <Button variant="contained" onClick={restartGame}>Restart Game</Button>
                </Box>
                :
                <Typography variant="h3" fontSize={20}>Current Turn: Player {currentTurn === 1 ? 'X' : 'O'}</Typography>
            }
        </Box>
    );
}

export default GameInfo;