import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const ProjectCreateForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Project Name</label>
    <Field name='name' component='input' type='text' placeholder='Robinhood' />
    <button type='submit'>create</button>
  </form>
)

ProjectCreateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'projectCreate'
})(ProjectCreateForm)
