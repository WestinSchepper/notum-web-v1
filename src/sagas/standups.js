import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import * as actions from '../actions/standups'
import { standupSchema } from '../schemas'

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
    yield put(actions.loadStandupSuccess(entities))
  } else {
    yield put(actions.loadStandupError(error))
  }
}

export function* watchLoadRemoteStandup () {
  yield takeLatest(actions.loadStandup().type, loadRemoteStandup)
}
