export default function createResourceReducer (resourceName) {
  const resourceActionType = resourceName.toUpperCase()

  return function resourceReducer (state = {}, action) {
    switch (action.type) {
      case `LOAD_${resourceActionType}S_SUCCEEDED`:
        return {
          ...state,
          ...action[`${resourceName}s`]
        }

      case `LOAD_${resourceActionType}_SUCCEEDED`:
        return {
          ...state,
          ...action[resourceName]
        }

      default:
        return state
    }
  }

}
