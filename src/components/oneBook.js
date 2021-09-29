/* eslint-disable */

import React from 'react';

const OneBook = (props) => {
  const { book } = props

  return (
    <div>
      <span>{book.title}</span> - <span>{book.category}</span>
    </div>
  );
}
 
export default OneBook;