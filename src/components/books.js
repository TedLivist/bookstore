import React from 'react';
import { useSelector } from 'react-redux';
import OneBook from './oneBook';

const Books = () => {
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
