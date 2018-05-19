import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import reducer from './reducers/index'

const defaultState = {}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, defaultState, enhancers)

export const history = syncHistoryWithStore(createBrowserHistory(), store)

if (module.hot) {
  module.hot.accept('./reducers/', () =>
    store.replaceReducer(require('./reducers/index').default))
}

export default store