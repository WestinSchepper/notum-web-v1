import {
  watchLoadRemoteProjects,
  watchLoadRemoteProject,
  watchUpdateRemoteProject
} from './projects'

import {
  watchLoadRemoteMembers,
  watchLoadRemoteMember
} from './members'

import { watchLoadRemoteStandup } from './standups'

export default function* rootSaga () {
  yield [
    watchLoadRemoteProjects(),
    watchLoadRemoteProject(),
    watchUpdateRemoteProject(),
    watchLoadRemoteMembers(),
    watchLoadRemoteMember(),
    watchLoadRemoteStandup()
  ]
}
