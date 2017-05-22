import { put, call, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import axios from 'axios'

import { membersActions, memberActions } from '../actions/members'
import { memberListSchema, memberSchema } from '../schemas'

// Fetch Members
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
    yield put(membersActions.loadMembersSuccess(entities))
  } else {
    yield put(membersActions.loadMembersError(error))
  }
}

export function* watchLoadRemoteMembers () {
  yield takeLatest(membersActions.LOAD_MEMBERS, loadRemoteMembers)
}

// Fetch Member
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
    yield put(memberActions.loadMemberSuccess(entities))
  } else {
    yield put(memberActions.loadMemberError(error))
  }
}

export function* watchLoadRemoteMember () {
  yield takeLatest(memberActions.LOAD_MEMBER, loadRemoteMember)
}
