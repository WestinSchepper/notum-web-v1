export const LOAD_STANDUP = 'LOAD_STANDUP'
export const LOAD_STANDUP_SUCCEEDED = 'LOAD_STANDUP_SUCCEEDED'
export const LOAD_STANDUP_FAILED = 'LOAD_STANDUP_FAILED'

export function loadStandup (id) {
  return {
    type: LOAD_STANDUP,
    id
  }
}

export function loadStandupSuccess (standup) {
  return {
    type: LOAD_STANDUP_SUCCEEDED,
    standup
  }
}

export function loadStandupError (error) {
  return {
    type: LOAD_STANDUP_FAILED,
    error
  }
}
