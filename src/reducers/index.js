import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import projects from './projects'
import members from './members'

export default combineReducers({
  projects,
  members,
  routing: routerReducer
})
