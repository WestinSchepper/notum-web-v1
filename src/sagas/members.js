import { put, call, takeLatest } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { normalize } from 'normalizr'
import axios from 'axios'

import { membersActions, memberActions } from '../actions/members'
import { memberListSchema, memberSchema } from '../schemas'
import { fetchResources } from './factories/resources'
import { fetchResource } from './factories/resource'
import { makeSaga } from './factories/makeSaga'
import { makeSagaWatcher } from './factories/makeSagaWatcher'

// Fetch Members
const requestMembers = fetchResources({
  resource: 'members',
  schema: memberListSchema
})

const loadRemoteMembers = makeSaga({
  request: requestMembers,
  successAction: membersActions.loadMembersSuccess,
  errorAction: membersActions.loadMembersError
})

export const watchLoadRemoteMembers = makeSagaWatcher({
  action: membersActions.LOAD_MEMBERS,
  saga: loadRemoteMembers
})

// Fetch Member
// TODO: Find better way to handle this, I don't like the currying
const requestMember = (id) => fetchResource({
  id,
  resource: 'members',
  schema: memberSchema
})()

// TODO: Find better way to handle this, I don't like the currying
const loadRemoteMember = (action) => makeSaga({
  request: requestMember,
  requestParams: [action.id],
  successAction: memberActions.loadMemberSuccess,
  errorAction: memberActions.loadMemberError
})()

export const watchLoadRemoteMember = makeSagaWatcher({
  action: memberActions.LOAD_MEMBER,
  saga: loadRemoteMember
})

// Update Member
function requestUpdateMember (id, body) {
  return axios.put(`http://localhost:3333/members/${id}`, body)
    .then(response => {
      const serialized = normalize(response.data, memberSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* updateRemoteMember (action) {
  const { entities, error } = yield call(requestUpdateMember, action.id, action.body)

  if (entities) {
    yield put(memberActions.updateMemberSuccess(entities))
    yield put(replace(`/members/${action.id}`))
  } else {
    yield put(memberActions.updateMemberError(error))
  }
}

export function* watchUpdateRemoteMember () {
  yield takeLatest(memberActions.UPDATE_MEMBER, updateRemoteMember)
}

// Create Member
function requestCreateMember (body) {
  return axios.post(`http://localhost:3333/members`, body)
    .then(response => {
      const serialized = normalize(response.data, memberSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* createRemoteMember (action) {
  const { entities, error } = yield call(requestCreateMember, action.body)

  if (entities) {
    yield put(memberActions.createMemberSuccess(entities))
    yield put(replace('/'))
  } else {
    yield put(memberActions.createMemberError(error))
  }
}

export function* watchCreateRemoteMember () {
  yield takeLatest(memberActions.CREATE_MEMBER, createRemoteMember)
}

// Delete Member
function requestRemoveMember (id) {
  return axios.delete(`http://localhost:3333/members/${id}`)
    .then(response => {
      return {
        id
      }
    })
    .catch(error => ({ error }))
}

export function* removeRemoteMember (action) {
  const { id, error } = yield call(requestRemoveMember, action.id)

  if (id) {
    yield put(memberActions.removeMemberSuccess(id))
    yield put(replace('/'))
  } else {
    yield put(memberActions.removeMemberError(error))
  }
}

export function* watchRemoveRemoteMember () {
  yield takeLatest(memberActions.REMOVE_MEMBER, removeRemoteMember)
}
