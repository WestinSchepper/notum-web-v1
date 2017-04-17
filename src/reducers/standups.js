import * as actions from '../actions/standups'

export default function (state = {}, action) {
  switch (action.type) {
    case actions.loadStandupSuccess().type:
      return {
        ...state,
        ...action.standup
      }
    default:
      return state
  }
}
