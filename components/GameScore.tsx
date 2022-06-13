import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import { FunctionComponent, ReactComponentElement } from "react";
import { GameScore } from "../types";

const GameScore: FunctionComponent<GameScore> = ({xScore, oScore}) => {

    return (
        <Box height='100%' width='fit-content' display='flex' alignItems='center'>
            <Box 
                display='flex' 
                flexDirection='column' 
                justifyContent='center' 
                gap={3}
                bgcolor={blue[500]} 
                color='white'
                p={3}
                borderRadius={3}
            >
                <Typography variant="h1" fontSize={24} borderBottom={2}>Score</Typography>
                <Typography variant="h1" fontSize={40}>{xScore ? `X - ${xScore}` : 'X'}</Typography>
                <Typography variant="h1" fontSize={40}>{oScore ? `O - ${oScore}` : 'O'}</Typography>
            </Box>    
        </Box>
    );
}

export default GameScore;