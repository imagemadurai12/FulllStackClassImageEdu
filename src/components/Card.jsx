import React from 'react'
import '../styles/card.css'
const Card = (props) => {
  return (
    <div className='card-item-container'>
      <div className="card-item-sub-container">
        <h1>{props.sName}</h1>
        <p>{props.sType}</p>
        <p>{props.sLocation}</p>
      </div>
    </div>
  )
}

export default Card
