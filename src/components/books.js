/* eslint-disable */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = () => {
  // const initialBooks = [{id: 1, title: 'Book One - ', author: 'Me '}, {id: 2, title: 'Book Two - ', author: 'Em '}]

  // const [books, setBooks] = useState(initialBooks)
  const dispatch = useDispatch()

  const books = useSelector((state) => state.books)

  const handleRemove = (id) => {
    dispatch(removeBook(id))
  }

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.id}
            {book.title}
            {book.author}
            <button type="button" onClick={() => handleRemove(book.id)}>Remove Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
