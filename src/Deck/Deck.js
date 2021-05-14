import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';

export const Deck = () => {
  return (
    <section className="deck_section">
          Deck of Cards
          <Link to='/homepage'>
            <button className='back_btn' >Back to Homepage</button>
          </Link>
    </section>
  );
}

export default Deck;
