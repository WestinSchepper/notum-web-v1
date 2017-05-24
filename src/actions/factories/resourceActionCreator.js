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
    [`LOAD_${resourceUppercase}_FAILED`]: `LOAD_${resourceUppercase}_FAILED`,

    [`UPDATE_${resourceUppercase}`]: `UPDATE_${resourceUppercase}`,
    [`UPDATE_${resourceUppercase}_SUCCEEDED`]: `UPDATE_${resourceUppercase}_SUCCEEDED`,
    [`UPDATE_${resourceUppercase}_FAILED`]: `UPDATE_${resourceUppercase}_FAILED`,

    [`CREATE_${resourceUppercase}`]: `CREATE_${resourceUppercase}`,
    [`CREATE_${resourceUppercase}_SUCCEEDED`]: `CREATE_${resourceUppercase}_SUCCEEDED`,
    [`CREATE_${resourceUppercase}_FAILED`]: `CREATE_${resourceUppercase}_FAILED`,
    
    [`REMOVE_${resourceUppercase}`]: `REMOVE_${resourceUppercase}`,
    [`REMOVE_${resourceUppercase}_SUCCEEDED`]: `REMOVE_${resourceUppercase}_SUCCEEDED`,
    [`REMOVE_${resourceUppercase}_FAILED`]: `REMOVE_${resourceUppercase}_FAILED`
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
    }),

    [`update${resourceCapitalized}`]: (id, body) => ({
      type: `UPDATE_${resourceUppercase}`,
      id,
      body
    }),
    [`update${resourceCapitalized}Success`]: (entities) => ({
      type: `UPDATE_${resourceUppercase}_SUCCEEDED`,
      payload: entities
    }),
    [`update${resourceCapitalized}Error`]: (error) => ({
      type: `UPDATE_${resourceUppercase}_FAILED`,
      error
    }),

    [`create${resourceCapitalized}`]: (body) => ({
      type: `CREATE_${resourceUppercase}`,
      body
    }),
    [`create${resourceCapitalized}Success`]: (entities) => ({
      type: `CREATE_${resourceUppercase}_SUCCEEDED`,
      payload: entities
    }),
    [`create${resourceCapitalized}Error`]: (error) => ({
      type: `CREATE_${resourceUppercase}_FAILED`,
      error
    }),

    [`remove${resourceCapitalized}`]: (id) => ({
      type: `REMOVE_${resourceUppercase}`,
      id
    }),
    [`remove${resourceCapitalized}Success`]: (id) => ({
      type: `REMOVE_${resourceUppercase}_SUCCEEDED`,
      id
    }),
    [`remove${resourceCapitalized}Error`]: (error) => ({
      type: `REMOVE_${resourceUppercase}_FAILED`,
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
