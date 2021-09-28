/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch()

  const [bookInput, setBookInput] = useState({id: '', title: '', author: ''})
  const [error, setError] = useState('')

  const onChange = (e) => {
    setBookInput({...bookInput, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newBook = {...bookInput}
    if (newBook.title.trim() && newBook.author.trim()) {
      newBook.id = uuidv4()
      dispatch(addBook(newBook))
      setBookInput({title: '', author: ''})
      setError('')
    } else {
      setError('Error: Missing title or author')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" required name='title' onChange={onChange} value={bookInput.title} placeholder="Title" />
      <input type="text" required name='author' onChange={onChange} value={bookInput.author} placeholder="Author" />
      {error.length > 4 ? <li>{error}</li> : ''}
      <button>Add Book</button>
    </form>
  );
}
 
export default BookForm;