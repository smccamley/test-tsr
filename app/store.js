import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(
  reducer,
  applyMiddleware(
    thunk,
    promiseMiddleware()
  )
)
