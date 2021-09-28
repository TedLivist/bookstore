/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch()

  const [bookInput, setBookInput] = useState({id: '', title: '', author: ''})
  
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
    <form onSubmit={onSubmit}>
      <input type="text" name='title' onChange={onChange} value={bookInput.title} placeholder="Title" />
      <input type="text" name='author' onChange={onChange} value={bookInput.author} placeholder="Author" />
      <button>Add Book</button>
    </form>
  );
}
 
export default BookForm;