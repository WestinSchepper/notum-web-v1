import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const MemberCreateForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor='name'>Name </label>
      <Field name='name' component='input' type='text' placeholder='Robinhood' />
    </p>
    <p>
      <label htmlFor='email'>Email </label>
      <Field name='email' component='input' type='email' placeholder='joe@example.com' />
    </p>
    <button type='submit'>create</button>
  </form>
)

MemberCreateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'memberCreate'
})(MemberCreateForm)
