import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './deleteButton';

const OneBook = (props) => {
  const { book } = props;

  return (
    <div className="mt-4">
      <div className="container book-container bg-white">
        <div>
          <div className="m-0 category text-secondary">{book.category}</div>
          <div className="kanit m-0">{book.title}</div>
          <DeleteButton bookId={book.item_id} />
        </div>
        <div className="center-div">
          <div className="circular-cent"><span>75%</span></div>
          <div className="circular-div"></div>
        </div>
        <div className="right-link">
          <div className="right-btn-div">
            <button disabled className="btn btn-primary btn-sm">Hahaha</button>
          </div>
        </div>
      </div>
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
