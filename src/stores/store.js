import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers/root'

export default function configureStore (initialState) {
  const middleWare = compose(
    applyMiddleware(
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )

  const store = createStore(
    rootReducer,
    initialState,
    middleWare
  )

  return store
}
