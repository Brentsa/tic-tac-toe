import { Box, Grid } from "@mui/material";
import { NextComponentType } from "next";
import Title from "./Title";
import TicTacToe from "./TicTacToe";

const MainPage: NextComponentType = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Title/>
                </Grid>
                <Grid item xs={12}>
                    <TicTacToe/>
                </Grid>
            </Grid>  
        </Box>
    );
}

export default MainPage;