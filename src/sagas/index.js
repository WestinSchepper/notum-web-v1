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
  watchCreateRemoteMember,
  watchRemoveRemoteMember
} from './members'

import {
  watchLoadRemoteStandup,
  watchCreateRemoteStandup
} from './standups'

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
    watchRemoveRemoteMember(),

    watchLoadRemoteStandup(),
    watchCreateRemoteStandup()
  ]
}
