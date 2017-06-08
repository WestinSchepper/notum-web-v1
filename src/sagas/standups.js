import { put, call, takeLatest } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { normalize } from 'normalizr'
import axios from 'axios'

import { standupActions } from '../actions/standups'
import { standupSchema } from '../schemas'
import { fetchResource } from './factories/resource'

// Fetch Standup
// TODO: Find better way to handle this, I don't like the currying
const requestStandup = (id) => fetchResource({
  id,
  resource: 'standups',
  schema: standupSchema
})()

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
    yield put(replace(`/projects/${action.body.standup.project_id}`))
  } else {
    yield put(standupActions.createStandupError(error))
  }
}

export function* watchCreateRemoteStandup () {
  yield takeLatest(standupActions.CREATE_STANDUP, createRemoteStandup)
}
