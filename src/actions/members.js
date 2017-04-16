export const LOAD_MEMBERS = 'LOAD_MEMBERS'
export const LOAD_MEMBERS_SUCCEEDED = 'LOAD_MEMBERS_SUCCEEDED'
export const LOAD_MEMBERS_FAILED = 'LOAD_MEMBERS_FAILED'

export function loadMembers () {
  return {
    type: LOAD_MEMBERS
  }
}

export function loadMembersSuccess (members) {
  return {
    type: LOAD_MEMBERS_SUCCEEDED,
    members
  }
}

export function loadMembersError (error) {
  return {
    type: LOAD_MEMBERS_FAILED,
    error
  }
}
