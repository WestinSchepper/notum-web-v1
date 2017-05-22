import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import { projectsActions, projectActions } from '../actions/projects'
import { projectListSchema, projectSchema } from '../schemas'

// Fetch Projects
function requestProjects () {
  return axios.get('http://localhost:3333/projects')
    .then(response => {
      const serialized = normalize(response.data, projectListSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteProjects () {
  const { entities, error } = yield call(requestProjects)

  if (entities) {
    yield put(projectsActions.loadProjectsSuccess(entities))
  } else {
    yield put(projectsActions.loadProjectsError(error))
  }
}

export function* watchLoadRemoteProjects () {
  yield takeLatest(projectsActions.LOAD_PROJECTS, loadRemoteProjects)
}

// Fetch Project
function requestProject (id) {
  return axios.get(`http://localhost:3333/projects/${id}`)
    .then(response => {
      const serialized = normalize(response.data, projectSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteProject (action) {
  const { entities, error } = yield call(requestProject, action.id)

  if (entities) {
    yield put(projectActions.loadProjectSuccess(entities))
  } else {
    yield put(projectActions.loadProjectError(error))
  }
}

export function* watchLoadRemoteProject () {
  yield takeLatest(projectActions.LOAD_PROJECT, loadRemoteProject)
}

// Update Project
function requestUpdateProject (id, body) {
  return axios.put(`http://localhost:3333/projects/${id}`, body)
    .then(response => {
      const serialized = normalize(response.data, projectSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* updateRemoteProject (action) {
  const { entities, error } = yield call(requestUpdateProject, action.id, action.body)

  if (entities) {
    yield put(projectActions.updateProjectSuccess(entities))
  } else {
    yield put(projectActions.updateProjectError(error))
  }
}

export function* watchUpdateRemoteProject () {
  yield takeLatest(projectActions.UPDATE_PROJECT, updateRemoteProject)
}
