import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import moment from 'moment'

const MemberDetailEdit = ({ id, name, email, createdAt, updatedAt, handleSubmit }) => (
  <div>
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <Field name='name' component='input' type='text' placeholder={name} />
          <button type='submit'>save</button>
          <Link to={`/members/${id}`}>cancel</Link>
        </p>
        <p>
          <Field name='email' component='input' type='email' placeholder={email} />
        </p>
      </form>
    </div>
    <ul>
      <li>Member ID: {id}</li>
      <li>Joined: {moment(createdAt).format('MMMM do, YYYY')}</li>
      {updatedAt && <li>Last Updated: {moment(updatedAt).format('MMMM do, YYYY')}</li>}
    </ul>
  </div>
)

MemberDetailEdit.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

export default reduxForm({
  form: 'memberEdit',
  enableReinitialize: true
})(MemberDetailEdit)
