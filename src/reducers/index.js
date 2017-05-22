import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import entities from './entities'

export default combineReducers({
  entities,
  routing: routerReducer,
  form: formReducer
})
