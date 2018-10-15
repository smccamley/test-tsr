import React from 'react'

import { Provider } from 'react-redux'
import store from './store'
import Loader from './Loader'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Loader />
      </Provider>
    )
  }
}