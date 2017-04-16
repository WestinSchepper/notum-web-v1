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

export const LOAD_PROJECT = 'LOAD_PROJECT'
export const LOAD_PROJECT_SUCCEEDED = 'LOAD_PROJECT_SUCCEEDED'
export const LOAD_PROJECT_FAILED = 'LOAD_PROJECT_FAILED'

export function loadProject (id) {
  return {
    type: LOAD_PROJECT,
    id
  }
}

export function loadProjectSuccess (project) {
  return {
    type: LOAD_PROJECT_SUCCEEDED,
    project
  }
}

export function loadProjectError (error) {
  return {
    type: LOAD_PROJECT_FAILED,
    error
  }
}
