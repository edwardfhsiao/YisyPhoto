import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { reducer } from './reducers/index'

import App from './components/Main/index'


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const YisyPhoto = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default YisyPhoto;
