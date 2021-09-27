/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react';

const Books = () => {
  const initialBooks = [{id: 1, title: 'Book One - ', author: 'Me '}, {id: 2, title: 'Book Two - ', author: 'Em '}]

  const [books, setBooks] = useState(initialBooks)
  const [bookInput, setBookInput] = useState({title: '', author: ''})

  const handleRemove = (id) => {
    const filtered = books.filter((book) => book.id !== id)
    for(let i = 0; i < filtered.length; i++) {
      filtered[i].id = filtered.indexOf(filtered[i]) + 1
    }
    setBooks(filtered)
  }

  const onChange = (e) => {
    setBookInput({...bookInput, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newBook = {...bookInput}
    setBooks(books, books.push({id: (books.length + 1), title: (newBook.title), author: (newBook.author)}))
    setBookInput({title: '', author: ''})
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

      <form onSubmit={onSubmit}>
        <input type="text" name='title' onChange={onChange} value={bookInput.title} placeholder="Title" />
        <input type="text" name='author' onChange={onChange} value={bookInput.author} placeholder="Author" />
        <button>Add Book</button>
      </form>
    </div>
  );
}

export default Books;
