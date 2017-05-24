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
  watchUpdateRemoteMember,
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
    watchUpdateRemoteMember(),
    watchCreateRemoteMember(),

    watchLoadRemoteStandup()
  ]
}
