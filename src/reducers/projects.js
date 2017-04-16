import {
  ADD_PROJECTS
} from '../actions/projects'

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_PROJECTS:
      return [
        ...action.projects
      ]
    default:
      return state
  }
}
