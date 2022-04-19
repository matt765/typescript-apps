import { Grid } from "@chakra-ui/react"
import { Square } from "./Square.comp"

interface IBoardProps {
    board: string[],
    squareClicked: (index: number) => void
}

export const Board: React.FC<IBoardProps> = ({ board, squareClicked }: IBoardProps) => {


    return (
        <>
            <Grid
                templateRows='repeat(3, 1fr)' 
                templateColumns='repeat(3, 1fr)'
                w='300px'
                h='300px'
            >
                { board.map((square: string, index: number) => <Square key={index} square={square} index={index} squareClicked={squareClicked} />)}
            </Grid>
        </>
    )
}