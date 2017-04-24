import merge from 'lodash/merge'

const defaultState = {
  projects: {},
  members: {},
  standups: {}
}

export default function (state = defaultState, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities)
  }

  return state
}
