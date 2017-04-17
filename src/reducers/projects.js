import * as actions from '../actions/projects'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.loadProjectsSuccess().type:
      return {
        ...state,
        ...action.projects
      }

    case actions.loadProjectSuccess().type:
      return {
        ...state,
        ...action.project
      }
    default:
      return state
  }
}
