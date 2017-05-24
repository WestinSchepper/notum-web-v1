import React, { PropTypes } from 'react'
import moment from 'moment'

const StandupItem = ({id, project, member, createdAt}) => {
  const projectName = (project) ? `${project.name} - ` : null
  const memberName = (member) ? `${member.name} - ` : null
  const title = memberName || projectName || null

  return (
    <div>
      <h4>{title}{moment(createdAt).format('MMM do, YYYY')}</h4>
    </div>
  )
}
StandupItem.propTypes = {
  id: PropTypes.number,
  project: PropTypes.object,
  member: PropTypes.object,
  createdAt: PropTypes.string
}

export default StandupItem
