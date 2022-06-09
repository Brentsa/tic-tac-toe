import { Box, Grid } from "@mui/material";
import { NextComponentType } from "next";
import Title from "./Title";
import GameLayout from "./GameLayout";

const MainPage: NextComponentType = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Title/>
                </Grid>
                <Grid item xs={12}>
                    <GameLayout/>
                </Grid>
            </Grid>  
        </Box>
    );
}

export default MainPage;