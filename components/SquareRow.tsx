import { Box } from "@mui/system"
import { FunctionComponent } from "react"
import GameSquare from "./GameSquare"

export interface Row {
    row: number
}

const SquareRow: FunctionComponent<Row> = ({row}) => {

    return (
        <Box display='flex' flexWrap='nowrap'>
            <GameSquare index={0} row={row}/>
            <GameSquare index={1} row={row}/>
            <GameSquare index={2} row={row}/>
        </Box>
    )
}

export default SquareRow;