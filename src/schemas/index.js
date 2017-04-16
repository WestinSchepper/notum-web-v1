import { schema } from 'normalizr'

export const projectSchema = new schema.Entity('projects')
export const projectListSchema = [ projectSchema ]

export const memberSchema = new schema.Entity('members')
export const memberListSchema = [ memberSchema ]

export const standupSchema = new schema.Entity('standups')
export const standupListSchema = [ standupSchema ]

projectSchema.define({
  members: memberListSchema,
  standups: standupListSchema
})

memberSchema.define({
  projects: projectSchema,
  standups: standupSchema
})

standupSchema.define({
  project: projectSchema,
  member: memberSchema
})
