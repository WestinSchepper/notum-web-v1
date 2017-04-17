import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

const StandupDetail = ({standup, project, member}) => (
  <div>
    <h2>Standup <Link to={`/standups/${standup.id}/edit`}><button>edit</button></Link></h2>
    <ul>
      <li><Link to={`/projects/${project.id}`}>{project.name}</Link></li>
      <li><Link to={`/members/${member.id}`}>{member.name}</Link></li>
      <li>{moment(standup.createdAt).format('MMM do, YYYY')}</li>
    </ul>
      <p><strong>Did:</strong> {standup.did}</p>
      <p><strong>Doing:</strong> {standup.doing}</p>
      <p><strong>Impediments:</strong> {standup.impediments}</p>
  </div>
)

StandupDetail.propTypes = {
  standup: PropTypes.shape({
    id: PropTypes.number,
    did: PropTypes.string,
    doing: PropTypes.string,
    impediments: PropTypes.string
  }),
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  member: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

StandupDetail.defaultProps = {
  member: {},
  project: {}
}

export default StandupDetail
