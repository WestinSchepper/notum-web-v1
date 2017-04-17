import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import projects from './projects'
import members from './members'
import standups from './standups'

export default combineReducers({
  projects,
  members,
  standups,
  routing: routerReducer
})
