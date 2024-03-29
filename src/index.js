import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './stores/store'
import defaultState from './stores/defaultState'
import Root from './root'

const store = configureStore(defaultState)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root {...{ store, history }} />,
  document.getElementById('root')
)
