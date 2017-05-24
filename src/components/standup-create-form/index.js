import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import isEmpty from 'lodash/isEmpty'

const StandupCreateForm = ({ project, projectMembers, selectedMember, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h3>
      Project: {project && project.name}
    </h3>
    <h3>
      Member:
      <Field name='memberId' component='select'>
        <option></option>
        {!isEmpty(projectMembers) && Object.keys(projectMembers).map((member) => (
          <option value={projectMembers[member].id} key={projectMembers[member].id}>{projectMembers[member].name}</option>
        ))}
      </Field></h3>
    <p>
      <label htmlFor='did'>did: </label>
      <br />
      <Field name='did' component='textarea' rows='8' cols='50' placeholder={`What did ${selectedMember.name || 'the member'} do?`} />
    </p>
    <p>
      <label htmlFor='doing'>doing: </label>
      <br />
      <Field name='doing' component='textarea' rows='8' cols='50' placeholder={`What is ${selectedMember.name || 'the member'} doing?`} />
    </p>
    <p>
      <label htmlFor='impediments'>impediments: </label>
      <br />
      <Field name='impediments' component='textarea' rows='8' cols='50' placeholder={`Did ${selectedMember.name || 'the member'} have any impediments?`} />
    </p>
    <p>
      <button type='submit'>create</button>
    </p>
  </form>
)

StandupCreateForm.propTypes = {
  project: PropTypes.object.isRequired,
  projectMembers: PropTypes.object.isRequired,
  selectedMember: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'standupCreate'
})(StandupCreateForm)
