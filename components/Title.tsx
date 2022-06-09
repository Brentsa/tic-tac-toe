import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextComponentType } from "next";


const Title: NextComponentType = () => {

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m={2}>
            <Typography variant="h2" fontSize={26}>Welcome to,</Typography>
            <Typography variant="h1" fontSize={42}>Tic-Tac-Toe</Typography>
        </Box>
    );
}

export default Title;