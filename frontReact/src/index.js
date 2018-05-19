import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ClientsListContainer from './containers/ClientsListContainer'
import Client from './components/Client'

// import './styles/style.css'

import store, { history } from './store'

import App from './components/App'
import './styles/app.css'

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

render(router, document.getElementById('root'))
module.hot.accept();