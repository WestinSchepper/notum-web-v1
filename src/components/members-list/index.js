import React, { PropTypes } from 'react'
import Member from '../member-item'
import { Link } from 'react-router'

const MembersList = ({members}) => (
  <ul>
    {(members.length > 0)
      ? members.map((member) =>
        (
          <li key={member.id}>
            <Link to={`/members/${member.id}`}>
              <Member {...member} />
            </Link>
          </li>
        ))
      : <p>No members we're found</p>
    }
  </ul>
)

MembersList.propTypes = {
  members: PropTypes.array
}

export default MembersList
