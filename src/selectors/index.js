import { createSelector } from 'reselect'
import pick from 'lodash/pick'

export const getProjects = state => state.entities.projects || {}
export const getMembers = state => state.entities.members || {}
export const getStandups = state => state.entities.standups || {}

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

const getMemberProjects = createSelector(
  [getMember, getProjects],
  (member, projects) => pick(projects, member.projects)
)

export const makeGetMemberProjects = () => {
  return createSelector([getMemberProjects], (memberProjects) => memberProjects)
}

const getMemberStandups = createSelector(
  [getMember, getStandups],
  (member, standups) => pick(standups, member.standups)
)

export const makeGetMemberStandups = () => {
  return createSelector([getMemberStandups], (memberStandups) => memberStandups)
}

const getStandup = (state, standupId) => state.entities.standups[standupId] || {}

export const makeGetStandup = () => (
  createSelector([getStandup], (standup) => standup)
)
