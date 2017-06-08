import { put, call } from 'redux-saga/effects'

export function makeSaga ({ request, successAction, errorAction }) {
  return function* () {
    const { entities, error } = yield call(request)

    if (entities) {
      yield put(successAction(entities))
    } else {
      yield put(errorAction(error))
    }
  }
}
