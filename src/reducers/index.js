import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import createResourceReducer from './creators/createResourceReducer'

import standups from './standups'

export default combineReducers({
  projects: createResourceReducer('project'),
  members: createResourceReducer('member'),
  standups,
  routing: routerReducer
})
