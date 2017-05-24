import merge from 'lodash/merge'
import without from 'lodash/without'
import omit from 'lodash/omit'

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
  let newState = Object.assign({}, state)

  switch (action.type) {
    case projectActions.REMOVE_PROJECT_SUCCEEDED:
      newState.projects = omit(newState.projects, action.id)

      return newState

    case projectActions.REMOVE_MEMBER_FROM_PROJECT_SUCCEEDED:
      newState.projects[action.projectId].members = without(newState.projects[action.projectId].members, action.memberId)
      // This didn't work without casting `action.projectId` from a String to an Int
      newState.members[action.memberId].projects = without(newState.members[action.memberId].projects, ~~action.projectId)

      return newState

    case projectActions.ADD_MEMBER_TO_PROJECT_SUCCEEDED:
      newState.projects[action.projectId].members.push(action.memberId)

      return newState

    default:
      return state
  }
}
