import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

interface IActionsProps {
    turn: string | null,
    winner: string | null,
    startClicked: () => void,
    resetClicked: () => void,
}

export const Actions: React.FC<IActionsProps> = ({ turn, winner, startClicked, resetClicked }: IActionsProps) => {
    return (
        <Flex flexDirection='column'>
            <div>{ turn && <>Turn: { turn }</> }</div>
            <div>{ winner && <>Winner: { winner }</> }</div>
            <div>
                { !turn && <Button colorScheme={'blue'} onClick={() => startClicked()}>Start</Button> }
                { turn && <Button colorScheme={'blue'} onClick={() => resetClicked()}>Reset</Button> }
            </div>
        </Flex>
    )
}
