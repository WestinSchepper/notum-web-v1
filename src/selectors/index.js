import { createSelector } from 'reselect'
import pick from 'lodash/pick'

export const getProjects = state => state.entities.projects || {}
export const getMembers = state => state.entities.members || {}

const getProject = (state, projectId) => state.entities.projects[projectId] || {}

export const makeGetProject = () => (
  createSelector([getProject], (project) => project)
)

const getProjectMembers = createSelector(
  [getProject, getMembers],
  (project, members) => pick(members, project.members)
)

export const makeGetProjectMembers = () => {
  return createSelector([getProjectMembers], (projectMembers) => projectMembers)
}

const getMember = (state, memberId) => state.entities.members[memberId] || {}

export const makeGetMember = () => (
  createSelector([getMember], (member) => member)
)

const getStandup = (state, standupId) => state.entities.standups[standupId] || {}

export const makeGetStandup = () => (
  createSelector([getStandup], (standup) => standup)
)
