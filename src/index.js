import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './stores/store'
import Root from './root'

const store = configureStore({
  projects: {}
})
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root {...{ store, history }} />,
  document.getElementById('root')
)
