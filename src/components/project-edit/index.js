import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import moment from 'moment'

const ProjectDetailEdit = ({ id, name, createdAt, updatedAt, handleSave }) => (
  <div>
    <div>
      <form onSubmit={handleSave}>
        <input type='text' value={name} />
        <button type='submit'>save</button>
        <Link to={`/projects/${id}`}>cancel</Link>
      </form>
    </div>
    <ul>
      <li>Project ID: {id}</li>
      <li>Started: {moment(createdAt).format('MMMM do, YYYY')}</li>
      {updatedAt && <li>Last Updated: {moment(updatedAt).format('MMMM do, YYYY')}</li>}
    </ul>
  </div>
)

ProjectDetailEdit.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  handleSave: PropTypes.func
}

export default ProjectDetailEdit
