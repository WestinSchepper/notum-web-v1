import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

const MemberDetail = ({id, name, createdAt, updatedAt}) => (
  <div>
    <h2>{name} <Link to={`/members/${id}/edit`}><button>edit</button></Link></h2>
    <ul>
      <li>Member ID: {id}</li>
      <li>Joined: {moment(createdAt).format('MMMM do, YYYY')}</li>
      {updatedAt && <li>Last Active: {moment(updatedAt).format('MMMM do, YYYY')}</li>}
    </ul>
  </div>
)

MemberDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

export default MemberDetail
