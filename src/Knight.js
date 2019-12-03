import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes } from "./Constants";
import previewImage from './assets/images/horse.png'

function Knight () {
  let [{isDragging}, drag, preview] = useDrag({
    item: {type: ItemTypes.KNIGHT},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })
  return (
    <React.Fragment>
      <DragPreviewImage connect={preview} src={previewImage}/>
      <div
        ref={drag}
        style={{
          fontSize: '60px',
          fontWeight: 'bold',
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move'
        }}>
        ♘
      </div>
    </React.Fragment>
  
  )
}

export default Knight