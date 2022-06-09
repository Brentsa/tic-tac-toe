import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { Row } from "./SquareRow";

interface Square extends Row{
    index: number
}

const GameSquare: FunctionComponent<Square> = ({index, row}) => {

    function handleClick(): void {
        console.log(`Row: ${row}, Index: ${index}`);
    }

    return (
        <Box height={80} width={80} border={2} component='button' onClick={handleClick}>

        </Box>
    );
}

export default GameSquare;