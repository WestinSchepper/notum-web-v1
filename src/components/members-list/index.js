import React, { PropTypes } from 'react'
import MemberItem from '../member-item'
import { Link } from 'react-router'

import List from '../list'

const MembersList = ({members}) => (
  <List items={members} configureItem={
    (member) => (
      <Link to={`/members/${member.id}`}>
        <MemberItem {...member} />
      </Link>
    )
  } />
)

MembersList.propTypes = {
  members: PropTypes.object.isRequired
}

export default MembersList
