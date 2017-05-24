import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import { standupActions } from '../actions/standups'
import { standupSchema } from '../schemas'

// Fetch Standup
function requestStandup (id) {
  return axios.get(`http://localhost:3333/standups/${id}`)
    .then(response => {
      const serialized = normalize(response.data, standupSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteStandup (action) {
  const { entities, error } = yield call(requestStandup, action.id)

  if (entities) {
    yield put(standupActions.loadStandupSuccess(entities))
  } else {
    yield put(standupActions.loadStandupError(error))
  }
}

export function* watchLoadRemoteStandup () {
  yield takeLatest(standupActions.LOAD_STANDUP, loadRemoteStandup)
}

// Create Standup
function requestCreateStandup (body) {
  return axios.post(`http://localhost:3333/standups`, body)
    .then(response => {
      const serialized = normalize(response.data, standupSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* createRemoteStandup (action) {
  const { entities, error } = yield call(requestCreateStandup, action.body)

  if (entities) {
    yield put(standupActions.createStandupSuccess(entities))
  } else {
    yield put(standupActions.createStandupError(error))
  }
}

export function* watchCreateRemoteStandup () {
  yield takeLatest(standupActions.CREATE_STANDUP, createRemoteStandup)
}
