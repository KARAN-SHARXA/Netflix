import React, { useRef, useEffect } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data.js'

const TitleCard = ({ title , category}) => {

  const cardsRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      cardsRef.current.scrollLeft += 100;
    } else {
      cardsRef.current.scrollLeft -= 100;
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    cards.addEventListener('wheel', handleWheel);

    return () => {
      cards.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='title-card'>
      <h2> {title ? title : "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
