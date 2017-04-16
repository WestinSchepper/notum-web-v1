import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware()

  const middleWare = compose(
    applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )

  const store = createStore(
    rootReducer,
    initialState,
    middleWare
  )

  sagaMiddleware.run(rootSaga)

  return store
}
