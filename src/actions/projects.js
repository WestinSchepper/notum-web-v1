export const ADD_PROJECT = 'ADD_PROJECT'

export function addProject (project) {
  return {
    type: ADD_PROJECT,
    project
  }
}
