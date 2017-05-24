import React, { PropTypes } from 'react'

const ProjectItem = ({name, leftAccessory, rightAccessory}) => (
  <div>
    <h4>{leftAccessory} {name} {rightAccessory}</h4>
  </div>
)

ProjectItem.propTypes = {
  name: PropTypes.string,
  leftAccessory: PropTypes.element,
  rightAccessory: PropTypes.element
}

export default ProjectItem
