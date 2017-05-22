import React, { PropTypes } from 'react'

const MemberItem = ({name, leftAccessory, rightAccessory}) => (
  <div>
    <h4> {leftAccessory} {name} {rightAccessory}</h4>
  </div>
)

MemberItem.propTypes = {
  name: PropTypes.string,
  leftAccessory: PropTypes.element,
  rightAccessory: PropTypes.element
}

export default MemberItem
