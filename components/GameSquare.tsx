import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { Square } from "../types";

const GameSquare: FunctionComponent<Omit<Square, 'rowValues'>> = ({index, row, value, toggleTurn}) => {

    function handleClick(): void {
        console.log(`Row: ${row}, Index: ${index}`);
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
            borderRight={index === 2 ? 2 : 0}
            borderBottom={row === 2 ? 2 : 0}
        >
            {value}
        </Box>
    );
}

export default GameSquare;