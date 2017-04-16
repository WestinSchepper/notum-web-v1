import * as actions from '../actions/members'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.loadMembersSuccess().type:
      return {
        ...state,
        ...action.members
      }
    default:
      return state
  }
}
