import { watchLoadRemoteProjects } from './projects'

export default function* rootSaga () {
  yield [
    watchLoadRemoteProjects()
  ]
}
