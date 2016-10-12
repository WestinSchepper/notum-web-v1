import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

const StandupDetail = ({id, did, doing, impediments, project, member, createdAt}) => (
  <div>
    <h2>Standup <Link to={`/standups/${id}/edit`}><button>edit</button></Link></h2>
    <ul>
      <li><Link to={`/projects/${project.id}`}>{project.name}</Link></li>
      <li><Link to={`/members/${member.id}`}>{member.name}</Link></li>
      <li>{moment(createdAt).format('MMM do, YYYY')}</li>
    </ul>
      <p><strong>Did:</strong> {did}</p>
      <p><strong>Doing:</strong> {doing}</p>
      <p><strong>Impediments:</strong> {impediments}</p>
  </div>
)

StandupDetail.propTypes = {
  id: PropTypes.number,
  did: PropTypes.string,
  doing: PropTypes.string,
  impediments: PropTypes.string,
  project: PropTypes.object,
  member: PropTypes.object,
  createdAt: PropTypes.string
}

StandupDetail.defaultProps = {
  member: {},
  project: {}
}

export default StandupDetail
