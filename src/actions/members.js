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

export const LOAD_MEMBER = 'LOAD_MEMBER'
export const LOAD_MEMBER_SUCCEEDED = 'LOAD_MEMBER_SUCCEEDED'
export const LOAD_MEMBER_FAILED = 'LOAD_MEMBER_FAILED'

export function loadMember (id) {
  return {
    type: LOAD_MEMBER,
    id
  }
}

export function loadMemberSuccess (member) {
  return {
    type: LOAD_MEMBER_SUCCEEDED,
    member
  }
}

export function loadMemberError (error) {
  return {
    type: LOAD_MEMBER_FAILED,
    error
  }
}
