import {
  watchLoadRemoteProjects,
  watchLoadRemoteProject,
  watchUpdateRemoteProject,
  watchCreateRemoteProject,
  watchRemoveRemoteProject,
  watchRemoveRemoteMemberFromProject,
  watchAddRemoteMemberToProject
} from './projects'

import {
  watchLoadRemoteMembers,
  watchLoadRemoteMember,
  watchCreateRemoteMember
} from './members'

import { watchLoadRemoteStandup } from './standups'

export default function* rootSaga () {
  yield [
    watchLoadRemoteProjects(),
    watchLoadRemoteProject(),
    watchUpdateRemoteProject(),
    watchCreateRemoteProject(),
    watchRemoveRemoteProject(),
    watchRemoveRemoteMemberFromProject(),
    watchAddRemoteMemberToProject(),

    watchLoadRemoteMembers(),
    watchLoadRemoteMember(),
    watchCreateRemoteMember(),

    watchLoadRemoteStandup()
  ]
}
