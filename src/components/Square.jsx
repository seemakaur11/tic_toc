import React from 'react'

const style = {
    background: 'lightblue',
    border: '6px solid white',
    fontSize: '25px',
    color:'red',
    fontWeight: '800',
    width: '55px',
    height: '55px',
    cursor: 'pointer',
    outline: 'none'
}

export default function Square({value, onClick}) {
    return (
        <div>
            <button onClick={onClick} style={style}>{value}</button>
        </div>
    )
}
