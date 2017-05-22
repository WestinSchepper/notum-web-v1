import { resourcesActionCreator, resourceActionCreator } from './factories/resourceActionCreator'

const projects = resourcesActionCreator('projects')
const project = resourceActionCreator('project')

const removeMemberConstants = Object.freeze({
  REMOVE_MEMBER_FROM_PROJECT: 'REMOVE_MEMBER_FROM_PROJECT',
  REMOVE_MEMBER_FROM_PROJECT_SUCCEEDED: 'REMOVE_MEMBER_FROM_PROJECT_SUCCEEDED',
  REMOVE_MEMBER_FROM_PROJECT_FAILED: 'REMOVE_MEMBER_FROM_PROJECT_FAILED'
})

const removeMemberActions = {
  removeMember: (projectId, memberId) => ({
    type: removeMemberConstants.REMOVE_MEMBER_FROM_PROJECT,
    projectId,
    memberId
  }),
  removeMemberSuccess: (projectId, memberId) => ({
    type: removeMemberConstants.REMOVE_MEMBER_FROM_PROJECT_SUCCEEDED,
    projectId,
    memberId
  }),
  removeMemberError: (error) => ({
    type: removeMemberConstants.REMOVE_MEMBER_FROM_PROJECT_FAILED,
    error
  })
}

const addMemberConstants = Object.freeze({
  ADD_MEMBER_TO_PROJECT: 'ADD_MEMBER_TO_PROJECT',
  ADD_MEMBER_TO_PROJECT_SUCCEEDED: 'ADD_MEMBER_TO_PROJECT_SUCCEEDED',
  ADD_MEMBER_TO_PROJECT_FAILED: 'ADD_MEMBER_TO_PROJECT_FAILED'
})

const addMemberActions = {
  addMember: (projectId, memberId) => ({
    type: addMemberConstants.ADD_MEMBER_TO_PROJECT,
    projectId,
    memberId
  }),
  addMemberSuccess: (projectId, memberId) => ({
    type: addMemberConstants.ADD_MEMBER_TO_PROJECT_SUCCEEDED,
    projectId,
    memberId
  }),
  addMemberError: (error) => ({
    type: addMemberConstants.ADD_MEMBER_TO_PROJECT_FAILED,
    error
  })
}

export const projectsActions = {
  ...projects.constants,
  ...projects.actions
}

export const projectActions = {
  ...project.constants,
  ...project.actions,

  ...removeMemberConstants,
  ...addMemberConstants,
  ...removeMemberActions,
  ...addMemberActions
}
