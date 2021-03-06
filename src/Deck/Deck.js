import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.scss';
import allImages from '../ImageData/imageArr';

export const Deck = () => {

    const shuffleDeck = () => {
        for (let i = 0; i < 52; i++) {
          let tempCard = allImages[i];
          var randomIndex = Math.floor(Math.random() * 52);
          allImages[i] = allImages[randomIndex];
          allImages[randomIndex] = tempCard
        }
        return allImages.map((card) => <img alt="card" src={card.image} key={card.id} className="deck_card"></img>)
      }

  return (
    <section className="deck_section">
          <Link to='/homepage'>
            <button className='back_btn' >Back to Homepage</button>
          </Link>
        <section className="card_section">
        </section>
            {shuffleDeck()}
        <section className="shuffle_button-section">
            <button 
                className="shuffle_button"
                //I couldn't get the cards to reload on call of shuffleDeck so I used the reload
                onClick={() => window.location.reload(false)}>Shuffle Cards
                {/* onClick={() => shuffleDeck()}>Shuffle Cards */}
            </button>
         </section>
    </section>
  );
}

export default Deck;
