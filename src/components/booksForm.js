import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const [bookInput, setBookInput] = useState({ item_id: '', title: '', category: '' });
  const [error, setError] = useState('');

  const onChange = (e) => {
    setBookInput({ ...bookInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newBook = { ...bookInput };
    if (newBook.title.trim() && newBook.category !== '') {
      newBook.item_id = uuidv4();
      dispatch(addBook(newBook));
      setBookInput({ title: '', category: '' });
      setError('');
    } else {
      setError('Error: Missing title or category');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" required name="title" onChange={onChange} value={bookInput.title} placeholder="Title" />
      <select name="category" onChange={onChange} value={bookInput.category}>
        <option>--Select category--</option>
        <option value="Grapefruit">Grapefruit</option>
        <option value="Lime">Lime</option>
      </select>
      {error.length > 4 ? <li>{error}</li> : ''}
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
