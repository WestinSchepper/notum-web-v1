import { resourcesActionCreator, resourceActionCreator } from './factories/resourceActionCreator'

const members = resourcesActionCreator('members')
const member = resourceActionCreator('member')

export const membersActions = {
  ...members.constants,
  ...members.actions
}

export const memberActions = {
  ...member.constants,
  ...member.actions
}
