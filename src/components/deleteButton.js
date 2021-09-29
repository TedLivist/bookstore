import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const DeleteButton = (props) => {
  const { bookId } = props;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <button type="button" onClick={() => handleRemove(bookId)}>Remove</button>
  );
};

DeleteButton.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default DeleteButton;
