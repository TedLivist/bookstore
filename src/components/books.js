/* eslint-disable */

import React, { useState } from 'react';

const Books = () => {
  const initialBooks = [{id: 1, title: 'Book One'}, {id: 2, title: 'Book Two'}]

  const [books, setBooks] = useState(initialBooks)
  const [bookInput, setBookInput] = useState({title: ''})

  const handleRemove = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const onChange = (e) => {
    const val = e.target.value
    setBookInput({title: val})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newBook = {...bookInput}
    setBooks(books, books.push({id: (books.length + 1), title: (newBook.title)}))
    setBookInput({title: ''})
  }

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            <button type="button" onClick={() => handleRemove(book.id)}>Remove Book</button>
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={bookInput.title} />
        <button>Add Book</button>
      </form>
    </div>
  );
}

export default Books;
