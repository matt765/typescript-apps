import { Center, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react";

interface ISquareProps {
    square: string;
    index: number;
    squareClicked: (index: number) => void
}

export const Square: React.FC<ISquareProps> = ({ square, index, squareClicked }: ISquareProps) => {
    const [ style, setStyle ] = useState({});

    useEffect(() => {
        // make borders on squares to draw tic tac toe looking board
        let currentStyles: any = {
            cursor: 'pointer'
        };

        if(index > 2) // 2nd and 3rd row
            currentStyles = { ...currentStyles, borderTop: '1px solid black' }
        
        if((index + 1) % 3 !== 0) // 1st and 2nd column
            currentStyles = { ...currentStyles, borderRight: '1px solid black' }

        setStyle(currentStyles);
    }, [ index ])

    return (
        <>
            <GridItem style={style} onClick={() => squareClicked(index)}>
                <Center width='100%' height='100%'>
                    { square }
                </Center>
            </GridItem>
        </>
    )
}