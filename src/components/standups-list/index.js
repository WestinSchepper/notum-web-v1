import React, { PropTypes } from 'react'
import Standup from '../standup-item'
import { Link } from 'react-router'

const StandupsList = ({standups}) => (
  <ul>
    {(standups.length > 0)
      ? standups.map((standup) =>
        (
          <li key={standup.id}>
            <Link to={`/standups/${standup.id}`}>
              <Standup {...standup} />
            </Link>
          </li>
        ))
      : <p>No standups we're found</p>
    }
  </ul>
)

StandupsList.propTypes = {
  standups: PropTypes.array
}

export default StandupsList
