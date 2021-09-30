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
    <form className="form fixed-bottom pt-4" onSubmit={onSubmit}>
      <div className="container">
        <h4>ADD BOOK</h4>
        <div class="row">
          <div class="col">
            <input type="text" className="form-control form-control-lg" required name="title" onChange={onChange} value={bookInput.title} placeholder="Title" />
          </div>
          <div class="col">
            <select className="form-control form-select-lg form-select" name="category" onChange={onChange} value={bookInput.category}>
              <option>--Select category--</option>
              <option value="Grapefruit">Grapefruit</option>
              <option value="Lime">Lime</option>
            </select>
          </div>
          {error.length > 4 ? <div className="col">{error}</div> : ''}
          <div class="col">
            <button className="form-control btn-lg btn btn-primary" type="submit">Add Book</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
