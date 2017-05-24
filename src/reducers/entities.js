import merge from 'lodash/merge'
import cloneDeep from 'lodash/cloneDeep'
import without from 'lodash/without'
import omit from 'lodash/omit'

import { projectActions } from '../actions/projects'
import { memberActions } from '../actions/members'
import { standupActions } from '../actions/standups'

const defaultState = {
  projects: {},
  members: {},
  standups: {}
}

const updateMembersAndProjects = (newState = {}, projectId, memberId) => {
  newState.members[memberId] = {
    ...newState.members[memberId],
    projects: [
      ...newState.members[memberId].projects || [],
      projectId
    ]
  }

  newState.projects[projectId] = {
    ...newState.projects[projectId],
    members: [
      ...newState.projects[projectId].members || [],
      memberId
    ]
  }

  return newState
}

export default function (state = defaultState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities)
  }

  // TODO: Find a better way to handle these cases.
  let newState = cloneDeep(state)

  switch (action.type) {
    case projectActions.REMOVE_PROJECT_SUCCEEDED:
      newState.projects = omit(newState.projects, action.id)

      return newState

    case memberActions.REMOVE_MEMBER_SUCCEEDED:
      newState.members = omit(newState.members, action.id)

      return newState

    case projectActions.REMOVE_MEMBER_FROM_PROJECT_SUCCEEDED:
      newState.projects[action.projectId].members = without(newState.projects[action.projectId].members, action.memberId)
      // This didn't work without casting `action.projectId` from a String to an Int.
      newState.members[action.memberId].projects = without(newState.members[action.memberId].projects, ~~action.projectId)

      return newState

    case projectActions.ADD_MEMBER_TO_PROJECT_SUCCEEDED:
      return updateMembersAndProjects(newState, action.projectId, action.memberId)

    case standupActions.CREATE_STANDUP_SUCCEEDED:
      // TODO: Figure out how to elegantly achieve this.
      newState = merge({}, newState, action.payload.entities)

      newState.projects[action.payload.entities.standups[action.payload.result].project_id] = {
        ...newState.projects[action.payload.entities.standups[action.payload.result].project_id],
        standups: [
          ...newState.projects[action.payload.entities.standups[action.payload.result].project_id].standups || [],
          action.payload.result
        ]
      }

      return newState

    default: return state
  }
}
