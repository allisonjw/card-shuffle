import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.scss';

export const Deck = ({ image, id }) => {
    console.log('in deck', image)

    const createDeck = () => {
        // let suits = ["Spades", "Diamonds", "Club", "Heart"];
        // let ranks = [
        //     "Ace",
        //     "2",
        //     "3",
        //     "4",
        //     "5",
        //     "6",
        //     "7",
        //     "8",
        //     "9",
        //     "10",
        //     "Jack",
        //     "Queen",
        //     "King",];
        let deck = [];
        console.log('in fnc', image)
        return deck.push(image)
        // for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
        //             for (let rankCounter = 0; rankCounter < 13; rankCounter++) {
        //                         deck.push(suits[suitCounter] + ranks[rankCounter])
        //                     }
        //                 }
        //                     return deck;
            };
            console.log('decl', createDeck(image))

        //     const copyArray = (source, array) => {
        // let index = -1
        // const length = source.length
        
        // array || (array = new Array(length))
        // while (++index < length) {
        //     array[index] = source[index]
        // }
        // return array
        // }

    const shuffleDeck = (deck) => {
        console.log(typeof deck)
        const length = deck == null ? 0 : deck.length
        if (!length) {
            return []
        }
        // let index = -1
        // const lastIndex = length - 1
        // const result = copyArray(deck)
        // while (++index < length) {
        //     const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
        //     const value = result[rand]
        //     result[rand] = result[index]
        //     result[index] = value
        // }
        // return result.splice(0, 4)
        for (let i = 0; i < 52; i++) {
            let tempCard = deck[i];
            var randomIndex = Math.floor(Math.random() * 52);
            deck[i] = deck[randomIndex];
            deck[randomIndex] = tempCard
          }
    };

    // const dealHand = () => {
    //     let hand = [];
    //     let shuffledHand = shuffleDeck().splice(1, 5)
    //     console.log('shuffle hand', shuffledHand)
    //     hand.push(shuffledHand)
    //     // while(hand.length < 5) {
    //     //   hand.push(deck.pop());
    //     // }
    //     return hand;
    //     // let hand = [];
    //     // for (let i = 0; i < 5; i++) {
    //     //     console.log('in method', deck[i].Value, deck[i].Suit)
    //     //     hand.push(deck[i].Suit + deck[i].Value)
    //     // while(hand.length < 5) {
    //     //     hand.push(deck.pop());
    //     // }
    //     // console.log('hand', typeof hand)
    //     // return hand;
    // };

    let testDeck = createDeck();
    shuffleDeck(testDeck);
    console.log('shuffle', testDeck)

    // let testHand = dealHand();
    // shuffleDeck(testDeck);
    // console.log('test hand', testHand)

  return (
    <section className="deck_section">
          <Link to='/homepage'>
            <button className='back_btn' >Back to Homepage</button>
          </Link>
          <section className="card_section">
          {createDeck(image)}
          <img 
                src={image}
                alt='card'
                id={id}
                className="deck_card">
        </img>
        </section>
        <section>
            <button 
                className="shuffle_button"
                onClick={() => shuffleDeck()}>shuffle
            </button>
         </section>
    </section>
  );
}

export default Deck;
