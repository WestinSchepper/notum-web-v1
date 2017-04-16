import { watchLoadRemoteProjects } from './projects'
import { watchLoadRemoteMembers } from './members'

export default function* rootSaga () {
  yield [
    watchLoadRemoteProjects(),
    watchLoadRemoteMembers()
  ]
}
