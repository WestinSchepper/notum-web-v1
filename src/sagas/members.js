import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import * as actions from '../actions/members'
import { memberListSchema, memberSchema } from '../schemas'

function requestMembers () {
  return axios.get('http://localhost:3333/members')
    .then(response => {
      const serialized = normalize(response.data, memberListSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteMembers () {
  const { entities, error } = yield call(requestMembers)

  if (entities) {
    yield put(actions.loadMembersSuccess(entities))
  } else {
    yield put(actions.loadMembersError(error))
  }
}

export function* watchLoadRemoteMembers () {
  yield takeLatest(actions.loadMembers().type, loadRemoteMembers)
}

function requestMember (id) {
  return axios.get(`http://localhost:3333/members/${id}`)
    .then(response => {
      const serialized = normalize(response.data, memberSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* loadRemoteMember (action) {
  const { entities, error } = yield call(requestMember, action.id)

  if (entities) {
    yield put(actions.loadMemberSuccess(entities))
  } else {
    yield put(actions.loadMemberError(error))
  }
}

export function* watchLoadRemoteMember () {
  yield takeLatest(actions.loadMember().type, loadRemoteMember)
}
