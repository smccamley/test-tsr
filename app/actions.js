export const getBooks = () => ({
  type: 'FETCH_BOOKS',
  payload: new Promise((resolve, reject) => {
    fetch('http://demo4596297.mockable.io/books')
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(error => reject(error))
  })
})

export const selectBook = bookId => ({
  type: 'SELECT_BOOK',
  payload: bookId
})

export const addToBasket = book => ({
  type: 'ADD_TO_BASKET',
  payload: book
})

export const removeFromBasket = index => ({
  type: 'REMOVE_FROM_BASKET',
  payload: index
})