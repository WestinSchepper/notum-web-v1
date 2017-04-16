import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import * as actions from '../actions/projects'

function requestProjects () {
  return axios.get('http://localhost:3333/projects')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function* loadRemoteProjects () {
  const { response, error } = yield call(requestProjects)

  if (response) {
    yield put(actions.loadProjectsSuccess(response.data))
  } else {
    yield put(actions.loadProjectsError(error))
  }
}

export function* watchLoadRemoteProjects () {
  yield takeLatest(actions.loadProjects().type, loadRemoteProjects)
}
