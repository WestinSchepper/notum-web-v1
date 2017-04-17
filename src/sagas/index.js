import { watchLoadRemoteProjects, watchLoadRemoteProject } from './projects'
import { watchLoadRemoteMembers, watchLoadRemoteMember } from './members'
import { watchLoadRemoteStandup } from './standups'

export default function* rootSaga () {
  yield [
    watchLoadRemoteProjects(),
    watchLoadRemoteProject(),
    watchLoadRemoteMembers(),
    watchLoadRemoteMember(),
    watchLoadRemoteStandup()
  ]
}
