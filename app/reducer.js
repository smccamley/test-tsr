import { combineReducers } from 'redux'


/*
 src/reducers/simpleReducer.js
*/
const books = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_FULFILLED':
      return action.payload
    default:
      return state
  }
}

const basket = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return [
        ...state,
        action.payload
      ]
    case 'REMOVE_FROM_BASKET':
      let a = [...state]
      a.splice(action.payload, 1)
      return a
    default:
      return state
  }
}

const selectedBook = (state = false, action) => {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.payload
    default:
      return state
  }
}


export default combineReducers({
  books,
  basket,
  selectedBook
})