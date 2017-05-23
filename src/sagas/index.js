import {
  watchLoadRemoteProjects,
  watchLoadRemoteProject,
  watchUpdateRemoteProject,
  watchRemoveRemoteMemberFromProject,
  watchAddRemoteMemberToProject
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
    watchAddRemoteMemberToProject(),

    watchLoadRemoteMembers(),
    watchLoadRemoteMember(),

    watchLoadRemoteStandup()
  ]
}
