import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';

export const Deck = () => {
    //find API for deck cards to fetch??

    const createDeck = () => {
        let suits = ["Spades", "Diamonds", "Club", "Heart"];
        let ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",];
        let deck = [];

        for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
            for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
                deck.push(suits[suitCounter] + ranks[rankCounter])
            }
        }
            return deck;
    };

    const shuffleDeck = (deck) => {
        for (let i = 0; i < 52; i++) {
            let tempCard = deck[i];
            var randomIndex = Math.floor(Math.random() * 52);
            deck[i] = deck[randomIndex];
            deck[randomIndex] = tempCard
          }
    };

    const dealHand = (deck) => {
        let hand = [];
        while(hand.length < 5) {
            hand.push(deck.pop());
        }
        return hand;
    };

    let testDeck = createDeck();
    shuffleDeck(testDeck);
    console.log(testDeck)

    let testHand = createDeck();
    dealHand(testHand);
    console.log('test hand', testHand)

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
