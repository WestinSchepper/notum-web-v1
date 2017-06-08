import { put, call } from 'redux-saga/effects'

export function makeSaga ({ request, successHandler, errorHandler }) {
  return function* () {
    const { entities, error } = yield call(request)

    if (entities) {
      yield put(successHandler(entities))
    } else {
      yield put(errorHandler(error))
    }
  }
}
