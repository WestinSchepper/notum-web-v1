import * as actions from '../actions/projects'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.loadProjectsSuccess().type:
      return [
        ...state,
        ...action.projects
      ]
    default:
      return state
  }
}
