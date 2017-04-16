import { watchLoadRemoteProjects } from './projects'
import { watchLoadRemoteMembers, watchLoadRemoteMember } from './members'

export default function* rootSaga () {
  yield [
    watchLoadRemoteProjects(),
    watchLoadRemoteMembers(),
    watchLoadRemoteMember()
  ]
}
