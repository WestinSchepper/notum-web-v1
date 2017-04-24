function createResourceAction (resourceName, hasID = false) {
  let resourceCapitalized = resourceName.charAt(0).toUpperCase() + resourceName.slice(1)
  let resourceUppercase = resourceName.toUpperCase()

  let fetchWithId = (id) => ({
    type: `LOAD_${resourceUppercase}`,
    id
  })

  let fetchWithoutId = () => ({
    type: `LOAD_${resourceUppercase}`
  })

  // FYI: Nested objects are not actually constants
  const constants = Object.freeze({
    [`LOAD_${resourceUppercase}`]: `LOAD_${resourceUppercase}`,
    [`LOAD_${resourceUppercase}_SUCCEEDED`]: `LOAD_${resourceUppercase}_SUCCEEDED`,
    [`LOAD_${resourceUppercase}_FAILED`]: `LOAD_${resourceUppercase}_FAILED`
  })

  const actions = {
    [`load${resourceCapitalized}`]: hasID ? fetchWithId : fetchWithoutId,
    [`load${resourceCapitalized}Success`]: (entities) => ({
      type: `LOAD_${resourceUppercase}_SUCCEEDED`,
      payload: entities
    }),

    [`load${resourceCapitalized}Error`]: (error) => ({
      type: `LOAD_${resourceUppercase}_FAILED`,
      error
    })
  }

  return {
    constants,
    actions
  }
}

export function resourcesActionCreator (resourceName) {
  return createResourceAction(resourceName, false)
}

export function resourceActionCreator (resourceName) {
  return createResourceAction(resourceName, true)
}
