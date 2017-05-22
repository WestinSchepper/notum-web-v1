import {
  watchLoadRemoteProjects,
  watchLoadRemoteProject,
  watchUpdateRemoteProject,
  watchRemoveRemoteMemberFromProject,
  watchAddRemoteMemberFromProject
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
    watchRemoveRemoteMemberFromProject(),
    watchAddRemoteMemberFromProject(),

    watchLoadRemoteMembers(),
    watchLoadRemoteMember(),

    watchLoadRemoteStandup()
  ]
}
