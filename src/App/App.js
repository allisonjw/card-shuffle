import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Deck from '../Deck/Deck';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/homepage' render={() => <HomePage />} />
        <Route path='/deck' render={() => <> <Header /> <Deck/> </>}/>
        <Redirect to='/homepage' />
      </Switch>
    </div>
  );
}

export default App;
