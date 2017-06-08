import { takeLatest } from 'redux-saga/effects'

export function makeSagaWatcher ({ action, saga }) {
  return function* () {
    yield takeLatest(action, saga)
  }
}
