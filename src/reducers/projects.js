import {
  ADD_PROJECT
} from '../actions/projects'

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state
    default:
      return state
  }
}
