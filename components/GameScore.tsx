import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import { FunctionComponent} from "react";
import { GameScore } from "../types";

const GameScore: FunctionComponent<GameScore> = ({xScore, oScore}) => {

    return (
        <Box height='100%' width={{ xs: '100%', sm: 'fit-content'}} display='flex' alignItems='center' justifyContent='center'>
            <Box 
                display='flex' 
                flexDirection={{ xs: null , sm: 'column' }} 
                justifyContent='center' 
                gap={3}
                bgcolor={blue[700]} 
                color='white'
                p={3}
                borderRadius={3}
            >
                <Typography variant="h1" fontSize={24} borderBottom={{xs: 0, sm: 2}} borderRight={{xs: 2, sm: 0}} pr={2}>Score</Typography>
                <Typography variant="h1" fontSize={{xs: 24, sm: 40}}>{xScore ? `X ${xScore}` : 'X'}</Typography>
                <Typography variant="h1" fontSize={{xs: 24, sm: 40}}>{oScore ? `O ${oScore}` : 'O'}</Typography>
            </Box>    
        </Box>
    );
}

export default GameScore;