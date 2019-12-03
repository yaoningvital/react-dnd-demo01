import React from 'react'

function Overlay ({color}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: color,
        opacity: 0.5
      }}
    />
  
  )
}

export default Overlay