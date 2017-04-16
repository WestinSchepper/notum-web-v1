import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import * as actions from '../actions/projects'
import { projectListSchema } from '../schemas'

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
