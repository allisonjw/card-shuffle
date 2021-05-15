import { getCardDeck, getCardDeckId } from './apiCall';

describe('apiCall.js', () => {

    describe('getCardDeck', () => {
      let mockResponse = {
        success: true,
        deck_id: "g8prl1dlu42h",
        remaining: 52,
        shuffled: false,
      }; 
      
          beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
              });
            });
          });
      
          it('should fetch with correct url', () => {
            const mockUrl = 'https://deckofcardsapi.com/api/deck/new/'
            getCardDeck(mockUrl)
            expect(window.fetch).toHaveBeenCalledWith(mockUrl)
          });
    });

    describe('getCardDeckId', () => {
        let mockResponse = {
          success: true,
          cards: [
              {
                  "code": "3H",
                  "image": "https://deckofcardsapi.com/static/img/3H.png",
                  "images": {
                      "svg": "https://deckofcardsapi.com/static/img/3H.svg",
                      "png": "https://deckofcardsapi.com/static/img/3H.png"
                  },
                  "value": "3",
                  "suit": "HEARTS"
              },
              {
                  "code": "3D",
                  "image": "https://deckofcardsapi.com/static/img/3D.png",
                  "images": {
                      "svg": "https://deckofcardsapi.com/static/img/3D.svg",
                      "png": "https://deckofcardsapi.com/static/img/3D.png"
                  },
                  "value": "3",
                  "suit": "DIAMONDS"
              }
          ],
          deck_id: "g8prl1dlu42h",
          remaining: 52,
          shuffled: false,
        }; 
        
            beforeEach(() => {
              window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                  ok: true,
                  json: () => Promise.resolve(mockResponse)
                });
              });
            });
        
            it('should fetch with correct url', () => {
              const mockUrl = 'https://deckofcardsapi.com/api/deck/g8prl1dlu42h/draw/?count=52'
              getCardDeckId(mockUrl)
              expect(window.fetch).toHaveBeenCalledWith(mockUrl)
            });
      });  
};    