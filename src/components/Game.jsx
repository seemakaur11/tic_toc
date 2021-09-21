import React, { useState } from 'react'
import Board from './Board'
import CalculateWinner from './CalculateWinner';

const styles = {
    width:'200px',
    margin: '20px auto'
}

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = CalculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' :'O'
        setBoard(boardCopy);
        setXIsNext(!xIsNext)

    }
    const renderMoves = () => (
        <button className = 'btnGame' onClick={()=>setBoard(Array(9).fill(null))}>Start Game</button>

    )
   return (
        <div>
            <h1 className="h1Game">Tic Toc Toe Game</h1>
          <Board  squares= {board} onClick={handleClick}/>
          <div style={styles}>
        <p className='winner'>{winner ? 'Winner  of: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        {renderMoves()}
          </div>
        </div>
    )
}
