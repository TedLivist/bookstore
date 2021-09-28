/* eslint-disable */

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeBook } from '../redux/books/books';

// const getBooks = async () => {
//   const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EaEPc8EhJHK5uQBC5fqK/books')
//   return response.json()
// }

// getBooks().then((data) => {
//   console.log(Object.keys(data))
// })

// const Books = async () => {
//   const dispatch = useDispatch();

//   const books = useSelector((state) => state.books);

//   const handleRemove = (id) => {
//     dispatch(removeBook(id));
//   };

//   return (
//     <div>
//       <h1>Books</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.item_id}>
//             {book.item_id}
//             {book.title}
//             {book.category}
//             <button type="button" onClick={() => handleRemove(book.item_id)}>Remove Book</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React from 'react';
import { useSelector } from "react-redux";

const Books = () => {
  const books = useSelector((state) => state.books);
  console.log(books)
  return (
    <div>Hahaha</div>
  );
}

export default Books;
