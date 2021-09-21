import React from 'react'
import Square from './Square'

export default function Board({squares, onClick}) {
    const style = {
        border: '3px solid darkblue',
        borderRadius: '5px',
        height: '172px',
        width: '165px',
        display: 'grid',
        margin: '0 auto',
        gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)',
        marginTop: '45px'
    }
    return (
        <div style={style}>
            {squares.map((square,i) => (
                
                <Square key = {i} value={square} onClick={()=>onClick(i)} />
            ))}
            
        </div>
    )
}
