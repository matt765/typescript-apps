import { useState } from "react";
import { Actions } from "./components/Actions.comp";
import { Board } from "./components/Board.comp";

const winningLines: number[][] = [
    [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ],
    [ 0, 2, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ],
    [ 0, 4, 8 ], [ 2, 4, 6 ]
];

export const TicTacToe: React.FC = () => {
    const [ board, setBoard ] = useState<string[]>(Array(9).fill(''));
    const [ turn, setTurn ] = useState<string | null>(null);
    const [ winner, setWinner ] = useState<string | null>(null);


    const equal3 = (a: any, b: any, c: any) => a === b && b === c;
    const getWinner = (board: string[]): string | null => {
        for(const [ a, b, c ] of winningLines) {
            if(board[a] === '') continue;
            if(equal3(board[a], board[b], board[c]))
                return board[a];
        }

        return null
    }

    const endGame = (winner: string | null = null) => {
        setTurn(null);
        setWinner(winner);
    }

    const getEmptySquares = (board: string[]): number =>
        board.reduce((count: number, square: string) => {
            if(square === '')
                count++;

            return count;
        }, 0);

    const squareClicked = (index: number) => {
        if(!turn) return;
        if(board[index] !== '') return;

        const newBoard = [ ...board ] ;
        newBoard[index] = turn;
        setBoard(newBoard);

        const checkWinner = getWinner(newBoard);
        if(
            checkWinner ||
            getEmptySquares(newBoard) === 0
        )
            endGame(checkWinner);
        else
            setTurn(turn === 'X' ? 'O': 'X');
    }

    const startClicked = () => {
        setTurn('X');
        setWinner(null);
        setBoard(Array(9).fill(''));
    }

    const resetClicked = () => {
        endGame();
        setBoard(Array(9).fill(''));
    }

    return (
        <>
            <Board board={board} squareClicked={squareClicked} />
            <Actions turn={turn} winner={winner} startClicked={startClicked} resetClicked={resetClicked} />
        </>
    )
}