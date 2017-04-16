export const LOAD_PROJECTS = 'LOAD_PROJECTS'
export const LOAD_PROJECTS_SUCCEEDED = 'LOAD_PROJECTS_SUCCEEDED'
export const LOAD_PROJECTS_FAILED = 'LOAD_PROJECTS_FAILED'

export function loadProjects () {
  return {
    type: LOAD_PROJECTS
  }
}

export function loadProjectsSuccess (projects) {
  return {
    type: LOAD_PROJECTS_SUCCEEDED,
    projects
  }
}

export function loadProjectsError (error) {
  return {
    type: LOAD_PROJECTS_FAILED,
    error
  }
}
