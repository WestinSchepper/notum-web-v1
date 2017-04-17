import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import * as actions from '../actions/projects'
import { projectListSchema, projectSchema } from '../schemas'

function requestProjects () {
  return axios.get('http://localhost:3333/projects')
    .then(response => {
      const serialized = normalize(response.data, projectListSchema)

      return {
        projects: serialized.entities.projects
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteProjects () {
  const { projects, error } = yield call(requestProjects)

  if (projects) {
    yield put(actions.loadProjectsSuccess(projects))
  } else {
    yield put(actions.loadProjectsError(error))
  }
}

export function* watchLoadRemoteProjects () {
  yield takeLatest(actions.loadProjects().type, loadRemoteProjects)
}

function requestProject (id) {
  return axios.get(`http://localhost:3333/projects/${id}`)
    .then(response => {
      const serialized = normalize(response.data, projectSchema)

      return {
        project: serialized.entities.projects
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteProject (action) {
  const { project, error } = yield call(requestProject, action.id)

  if (project) {
    yield put(actions.loadProjectSuccess(project))
  } else {
    yield put(actions.loadProjectError(error))
  }
}

export function* watchLoadRemoteProject () {
  yield takeLatest(actions.loadProject().type, loadRemoteProject)
}
