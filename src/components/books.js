import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OneBook from './oneBook';
import store from '../redux/configureStore';
import { clearBooks, getBooks } from '../redux/books/books';

const Books = () => {
  useEffect(() => {
    store.dispatch(clearBooks());
    store.dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <OneBook book={book} key={book.item_id} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
