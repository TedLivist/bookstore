/* eslint-disable */

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => async (dispatch) => (
  // type: ADD_BOOK,
  // payload,
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EaEPc8EhJHK5uQBC5fqK/books', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  })
  .then((response) => response.ok)
  .then((data) => {
    if (data) {
      dispatch({type: ADD_BOOK, payload})
    }
  })
);

export const removeBook = (id) => async (dispatch) => (
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EaEPc8EhJHK5uQBC5fqK/books/${id}`, {
    method: 'DELETE'
  })
  .then((response) => response.text())
  .then(dispatch({type: REMOVE_BOOK, id}))
)
// ) ({
//   type: REMOVE_BOOK,
//   id: payload,
// });

export const getBooks = () => async (dispatch) => (
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EaEPc8EhJHK5uQBC5fqK/books')
  .then((response) => response.json())
  .then((payload) => {
    const obj = Object.entries(payload)
    const books = obj.map(([item_id, value]) => {
      const [book] = value
      return {...book, item_id}
    })
    dispatch({type: GET_BOOKS, books})
  })
)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        action.payload,
        ...state,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case GET_BOOKS:
      return state.concat(action.books);
    default:
      return state;
  }
};

export default reducer;
