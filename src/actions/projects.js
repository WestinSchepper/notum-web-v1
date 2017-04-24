import { resourcesActionCreator, resourceActionCreator } from './factories/resourceActionCreator'

const projects = resourcesActionCreator('projects')
const project = resourceActionCreator('project')

export const projectsActions = {
  ...projects.constants,
  ...projects.actions
}

export const projectActions = {
  ...project.constants,
  ...project.actions
}
