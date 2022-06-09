import { Box } from "@mui/system"
import { NextComponentType } from "next"


const TicTacToe: NextComponentType = () => {

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m={2}>
            Does this render
        </Box>
    )
}

export default TicTacToe;