import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'

export default ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
)
