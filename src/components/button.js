/* eslint-disable */

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Button = (props) => {
  const {bookId} = props;
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeBook(id))
  }

  return (
    <button onClick={() => handleRemove(bookId)}>Remove</button>
  );
}
 
export default Button;