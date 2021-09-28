/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import { v4 as uuidv4 } from 'uuid';

const Books = () => {
  // const initialBooks = [{id: 1, title: 'Book One - ', author: 'Me '}, {id: 2, title: 'Book Two - ', author: 'Em '}]

  // const [books, setBooks] = useState(initialBooks)
  const [bookInput, setBookInput] = useState({id: '', title: '', author: ''})
  const dispatch = useDispatch()

  const books = useSelector((state) => state.books)

  const handleRemove = (id) => {
    dispatch(removeBook(id))
  }

  const onChange = (e) => {
    setBookInput({...bookInput, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newBook = {...bookInput}
    newBook.id = uuidv4()
    dispatch(addBook(newBook)) 
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
