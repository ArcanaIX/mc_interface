import React from 'react'
import './PlayerPill.css'
const PlayerPill = (name) => {
  console.log(name.name.name);
  return (
    <div className='pill'><p>{name.name.name}</p></div>
  )
}

export default PlayerPill