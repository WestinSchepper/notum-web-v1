import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

const ProjectDetail = ({id, name, createdAt, updatedAt}) => (
  <div>
    <h2>{name} <Link to={`/projects/${id}/edit`}><button>edit</button></Link></h2>
    <ul>
      <li>Project ID: {id}</li>
      <li>Started: {moment(createdAt).format('MMMM do, YYYY')}</li>
      {updatedAt && <li>Last Updated: {moment(updatedAt).format('MMMM do, YYYY')}</li>}
    </ul>
  </div>
)

ProjectDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

export default ProjectDetail
