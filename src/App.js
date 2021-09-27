import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Books from './components/books';
import Categories from './components/categories';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </>
  );
}

export default App;
