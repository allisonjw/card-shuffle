export const getCardDeck = async () => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/')
    if (!response.ok) {
      throw Error('Unable to get deck of cards. Try again later.')
    }
    const cardDeck = await response.json();
    console.log('fetched deck', cardDeck.deck_id)
    return cardDeck;
};

export const getCardDeckId = async (cardDeck) => {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${cardDeck}/draw/?count=52`)
    if (!response.ok) {
      throw Error('Unable to get deck of cards. Try again later.')
    }
    const cardDeckId = await response.json();
    console.log('api')
    return cardDeckId;
};
