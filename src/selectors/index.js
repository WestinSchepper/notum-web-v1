import { createSelector } from 'reselect'

export const getProjects = state => state.entities.projects || {}
export const getMembers = state => state.entities.members || {}

const getProject = (state, projectId) => state.entities.projects[projectId] || {}

export const makeGetProject = () => (
  createSelector([getProject], (project) => project)
)
