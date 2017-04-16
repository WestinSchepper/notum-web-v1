import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import * as actions from '../actions/members'
import { memberListSchema } from '../schemas'

function requestMembers () {
  return axios.get('http://localhost:3333/members')
    .then(response => {
      const serialized = normalize(response.data, memberListSchema)

      return {
        members: serialized.entities.members
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteMembers () {
  const { members, error } = yield call(requestMembers)

  if (members) {
    yield put(actions.loadMembersSuccess(members))
  } else {
    yield put(actions.loadMembersError(error))
  }
}

export function* watchLoadRemoteMembers () {
  yield takeLatest(actions.loadMembers().type, loadRemoteMembers)
}
