import React, { PropTypes } from 'react'

const ProjectItem = ({id, name}) => (
  <div>
    <h4>{name}</h4>
  </div>
)

ProjectItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default ProjectItem
