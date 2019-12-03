import React from 'react'
import Knight from "./Knight";
import { useDrop } from 'react-dnd'
import { ItemTypes } from "./Constants";
import Overlay from './Overlay'

function Square ({x, y, knightPosition, canKnightMove, moveKnight}) {
  let isBlack = (x + y) % 2 === 1
  let [knightX, knightY] = knightPosition
  let isKnightHere = x === knightX && y === knightY
  
  let [{isOver, canDrop}, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => moveKnight(x, y),
    canDrop: () => canKnightMove(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    })
  })
  return (
    <React.Fragment>
      <div
        ref={drop}
        style={{
          width: '12.5%',
          height: '12.5%',
          backgroundColor: isBlack ? 'black' : 'white',
          color: isBlack ? 'white' : 'black',
          position: 'relative'
        }}
        className="square"
      >
        {
          isKnightHere &&
          <Knight/>
        }
        {isOver && !canDrop && <Overlay color="red"/>}
        {!isOver && canDrop && <Overlay color="yellow"/>}
        {isOver && canDrop && <Overlay color="green"/>}
      </div>
    </React.Fragment>
  
  )
}

export default Square