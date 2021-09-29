/* eslint-disable */

import React from 'react';
import Button from './button';

const OneBook = (props) => {
  const { book } = props

  return (
    <div>
      <span>{book.title}</span> - <span>{book.category}</span>
      <Button bookId={book.item_id} />
    </div>
  );
}
 
export default OneBook;