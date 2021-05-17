import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import Deck from '../Deck/Deck';

export const App = () => {
  return (
    <section className="app_section">
      <Switch>
        <Route exact path='/homepage' render={() => <HomePage />} />
        <Route path='/deck' render={() => <> <Header /> <Deck /> </>}/>
        <Redirect to='/homepage' />
      </Switch>
    </section>
  );
}

export default App;
