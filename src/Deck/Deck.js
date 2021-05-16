import React from 'react';
import { Link } from 'react-router-dom';
import './Deck.scss';
import allImages from '../ImageData/imageArr';

export const Deck = () => {
    const getAllImages = allImages.map(deck => deck.image)  

    let deck = [];
    const createDeck = () => {
        getAllImages.forEach(card => {
            return deck.push(card)
        })
        return deck.map((card) => <img alt="card" src={card} className="deck_card"></img>);
    };
    
        const copyArray = (source, array) => {
        let index = -1
        const length = source.length
        
        array || (array = new Array(length))
        while (++index < length) {
                array[index] = source[index]
            }
            return array
            }
            
    const shuffleDeck = () => {
        // for (let i = deck.length - 1; i > 0; i--) {
        //     let j = Math.floor(Math.random() * i);
        //     let temp = deck[i];
        //     deck[i] = deck[j];
        //     deck[j] = temp;
        //   }
          
        //   console.log('The first five cards are:');
          
        //   // display 5 results
        //   for (let i = 0; i < 5; i++) {
        //     console.log(deck[i])
        //   }
        const length = deck == null ? 0 : deck.length
        if (!length) {
            return []
        }
        let index = -1
        const lastIndex = length - 1
        const result = copyArray(deck)
        while (++index < length) {
            const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
            const value = result[rand]
            result[rand] = result[index]
            result[index] = value
        }
        return result.splice(0, 4)
        // for (let i = 0; i < 52; i++) {
        //     let tempCard = deck[i];
        //     var randomIndex = Math.floor(Math.random() * 52);
        //     deck[i] = deck[randomIndex];
        //     deck[randomIndex] = tempCard
        //   }
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

    // let testHand = dealHand();
    // shuffleDeck(testDeck);
    // console.log('test hand', testHand)

  return (
    <section className="deck_section">
          <Link to='/homepage'>
            <button className='back_btn' >Back to Homepage</button>
          </Link>
          <section className="card_section">
          {createDeck()}
          {/* <img 
                src={createDeck()[0]}
                alt='card'
                className="deck_card">
        </img> */}
        </section>
        <section className="shuffle_button-section">
            <button 
                className="shuffle_button"
                onClick={() => shuffleDeck()}>Shuffle Cards
            </button>
         </section>
    </section>
  );
}

export default Deck;
