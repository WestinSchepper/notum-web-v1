import { resourcesActionCreator, resourceActionCreator } from './factories/resourceActionCreator'

const standup = resourceActionCreator('standup')

export const standupActions = {
  ...standup.constants,
  ...standup.actions
}
