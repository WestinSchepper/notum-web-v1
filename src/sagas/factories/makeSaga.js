import { put, call } from 'redux-saga/effects'

export function makeSaga ({
  request,
  requestParams = [],
  successAction,
  successActions = [],
  errorAction
}) {
  return function* () {
    const { entities, error } = yield call(request, ...requestParams)

    if (entities) {
      if (successActions.length > 0) {
        /* TODO: Figure out why this is causing the error message below:

          uncaught at updateRemoteMember Error: Actions must
          be plain objects. Use custom middleware for async actions.
        **/
        yield successActions.map(action => put(action))

      } else {
        yield put(successAction(entities))
      }
    } else {
      yield put(errorAction(error))
    }
  }
}
