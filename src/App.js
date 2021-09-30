import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Books from './components/books';
import Categories from './components/categories';
import Navbar from './components/navbar';
import store from './redux/configureStore';
import BookForm from './components/booksForm';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
          <BookForm />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
