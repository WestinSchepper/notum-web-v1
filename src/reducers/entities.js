import merge from 'lodash/merge'
import without from 'lodash/without'

import { projectActions } from '../actions/projects'

const defaultState = {
  projects: {},
  members: {},
  standups: {}
}

export default function (state = defaultState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities)
  }

  // TODO: Find a better way to handle these cases.
  switch (action.type) {
    case projectActions.REMOVE_MEMBER_FROM_PROJECT_SUCCEEDED:
      let newState = Object.assign({}, state)
      newState.projects[action.projectId].members = without(newState.projects[action.projectId].members, action.memberId)
      return newState

    default:
      return state
  }
}
