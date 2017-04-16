import { takeLatest } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import axios from 'axios'

import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAIL
} from '../actions/projects'

export function* fetchProjects () {
  try {
    const response = yield call(axios.get, 'http://localhost:3333/projects')
    yield put({ type: FETCH_PROJECTS_SUCCESS, projects: response.data })

  } catch (error) {
    yield put({ type: FETCH_PROJECTS_FAIL })

  }
}

export function* watchFetchProjects () {
  yield takeLatest(FETCH_PROJECTS, fetchProjects)
}
