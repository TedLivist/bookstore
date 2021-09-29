import React from 'react';
import PropTypes from 'prop-types';
import Button from './deleteButton';
import ProgressBar from './progressBar';

const OneBook = (props) => {
  const { book } = props;

  return (
    <div>
      <span>{book.title}</span>
      <span>{book.category}</span>
      <ProgressBar />
      <Button bookId={book.item_id} />
    </div>
  );
};

OneBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default OneBook;
