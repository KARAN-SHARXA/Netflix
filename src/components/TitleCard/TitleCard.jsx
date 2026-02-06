import React from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data.js'

const Titlecard = () => {
  return (
    <div className='titlecard'>
      <h2>Popular on Netflix</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} />
              <p>{card.name}</p>
            </div>
          )

        })}
      </div>
    </div>
  )
}

export default Titlecard