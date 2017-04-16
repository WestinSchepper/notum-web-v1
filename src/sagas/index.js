import { watchLoadRemoteProjects, watchLoadRemoteProject } from './projects'
import { watchLoadRemoteMembers, watchLoadRemoteMember } from './members'

export default function* rootSaga () {
  yield [
    watchLoadRemoteProjects(),
    watchLoadRemoteProject(),
    watchLoadRemoteMembers(),
    watchLoadRemoteMember()
  ]
}
