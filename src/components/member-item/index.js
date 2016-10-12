import React, { PropTypes } from 'react'

const MemberItem = ({id, name}) => (
  <div>
    <h4>{name}</h4>
  </div>
)

MemberItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default MemberItem
