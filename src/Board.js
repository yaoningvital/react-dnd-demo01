import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from "react-dnd-html5-backend";
import Square from './Square'


function Board () {
  let initialKnightPosition = [1, 7]
  let [knightPosition, setKnightPosition] = useState(initialKnightPosition)
  
  const squares = []
  for (let i = 0; i < 64; i++) {
    let x = i % 8
    let y = Math.floor(i / 8)
    squares.push((
      <Square
        key={i}
        x={x}
        y={y}
        knightPosition={knightPosition}
        canKnightMove={canKnightMove}
        moveKnight={(toX, toY) => moveKnight(toX, toY)}
      />
    ))
  }
  
  function moveKnight (toX, toY) {
    if (canKnightMove(toX, toY)) {
      setKnightPosition([toX, toY])
    }
  }
  
  function canKnightMove (toX, toY) {
    let [x, y] = knightPosition
    let dX = Math.abs(x - toX)
    let dY = Math.abs(y - toY)
    return (dX === 1 && dY === 2) || (dX === 2 && dY === 1)
  }
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="board"
        style={{
          width: '800px',
          height: '800px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  
  )
}

export default Board