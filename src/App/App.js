import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Deck from '../Deck/Deck';
import allImages from '../ImageData/imageArr';

export const App = () => {
  // const getAllImages = allImages.map(card => card.image)
  
  const getAllImages = allImages.map(deck => <Deck key={deck.id} image={deck.image} />)
  console.log('image', getAllImages)
  return (
    <section className="App">
      <Switch>
        <Route exact path='/homepage' render={() => <HomePage />} />
        <Route path='/deck' render={() => <> <Header /> <Deck /> </>}/>
        <Redirect to='/homepage' />
      </Switch>
    </section>
  );
}

export default App;
