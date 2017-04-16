import {
  FETCH_PROJECTS_SUCCESS
} from '../actions/projects'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return [
        ...state,
        ...action.projects
      ]
    default:
      return state
  }
}
