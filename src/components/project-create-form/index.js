import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const ProjectCreateForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Project Name</label>
    <Field name='name' component='input' type='text' placeholder='Robinhood' />
    <button type='submit'>create</button>
  </form>
)

export default reduxForm({
  form: 'projectCreate'
})(ProjectCreateForm)
