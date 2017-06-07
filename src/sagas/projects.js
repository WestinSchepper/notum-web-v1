import { put, call, takeLatest } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { normalize } from 'normalizr'
import axios from 'axios'

import { projectsActions, projectActions } from '../actions/projects'
import { projectListSchema, projectSchema } from '../schemas'
import { fetchResources } from './factories/resources'

// Fetch Projects
const requestProjects = fetchResources({
  resource: 'projects',
  schema: projectListSchema
})

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
    yield put(replace(`/projects/${action.id}`))
  } else {
    yield put(projectActions.updateProjectError(error))
  }
}

export function* watchUpdateRemoteProject () {
  yield takeLatest(projectActions.UPDATE_PROJECT, updateRemoteProject)
}

// Create Project
function requestCreateProject (body) {
  return axios.post(`http://localhost:3333/projects`, body)
    .then(response => {
      const serialized = normalize(response.data, projectSchema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}

export function* createRemoteProject (action) {
  const { entities, error } = yield call(requestCreateProject, action.body)

  if (entities) {
    yield put(projectActions.createProjectSuccess(entities))
    yield put(replace('/'))
  } else {
    yield put(projectActions.createProjectError(error))
  }
}

export function* watchCreateRemoteProject () {
  yield takeLatest(projectActions.CREATE_PROJECT, createRemoteProject)
}

// Delete Project
function requestRemoveProject (id) {
  return axios.delete(`http://localhost:3333/projects/${id}`)
    .then(response => {
      return {
        id
      }
    })
    .catch(error => ({ error }))
}

export function* removeRemoteProject (action) {
  const { id, error } = yield call(requestRemoveProject, action.id)

  if (id) {
    yield put(projectActions.removeProjectSuccess(id))
    yield put(replace('/'))
  } else {
    yield put(projectActions.removeProjectError(error))
  }
}

export function* watchRemoveRemoteProject () {
  yield takeLatest(projectActions.REMOVE_PROJECT, removeRemoteProject)
}

// Remove Member From Project
function requestRemoveMemberFromProject (projectId, memberId) {
  const body = {
    member_id: memberId
  }
  return axios.post(`http://localhost:3333/projects/${projectId}/remove_member`, body)
    .then(response => {
      return {
        projectId,
        memberId
      }
    })
    .catch(error => ({ error }))
}

export function* removeRemoteMemberFromProject (action) {
  const { projectId, memberId, error } = yield call(requestRemoveMemberFromProject, action.projectId, action.memberId)

  if (projectId && memberId) {
    yield put(projectActions.removeMemberSuccess(projectId, memberId))
  } else {
    yield put(projectActions.removeMemberError(error))
  }
}

export function* watchRemoveRemoteMemberFromProject () {
  yield takeLatest(projectActions.REMOVE_MEMBER_FROM_PROJECT, removeRemoteMemberFromProject)
}

// // Add Member From Project
function requestAddMemberToProject (projectId, memberId) {
  const body = {
    member_id: memberId
  }
  return axios.post(`http://localhost:3333/projects/${projectId}/add_member`, body)
    .then(response => {
      return {
        projectId,
        memberId
      }
    })
    .catch(error => ({ error }))
}

export function* addRemoteMemberToProject (action) {
  const { projectId, memberId, error } = yield call(requestAddMemberToProject, action.projectId, action.memberId)

  if (projectId && memberId) {
    yield put(projectActions.addMemberSuccess(projectId, memberId))
  } else {
    yield put(projectActions.addMemberError(error))
  }
}

export function* watchAddRemoteMemberToProject () {
  yield takeLatest(projectActions.ADD_MEMBER_TO_PROJECT, addRemoteMemberToProject)
}
