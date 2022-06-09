import { Box } from "@mui/system"
import { NextComponentType } from "next"
import SquareRow from "./SquareRow";


const GameLayout: NextComponentType = () => {

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m={2}>
            <SquareRow row={0}/>
            <SquareRow row={1}/>
            <SquareRow row={2}/>
        </Box>
    )
}

export default GameLayout;