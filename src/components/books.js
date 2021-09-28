import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.id}
            {book.title}
            {book.category}
            <button type="button" onClick={() => handleRemove(book.id)}>Remove Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
