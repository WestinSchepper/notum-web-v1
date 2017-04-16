export const ADD_PROJECTS = 'ADD_PROJECTS'

export function addProjects (projects) {
  return {
    type: ADD_PROJECTS,
    projects
  }
}
