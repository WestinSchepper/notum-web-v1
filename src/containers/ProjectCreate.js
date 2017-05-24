import React from 'react'
import { dispatch } from 'redux'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

import Modal from '../components/modal'
import ProjectCreateForm from '../components/project-create-form'

import { projectActions } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClose: () => {
      dispatch(replace('/'))
    },
    onSubmit: (data) => {
      const formattedData = {
        project: {
          name: data.name
        }
      }

      dispatch(projectActions.createProject(formattedData))
    }
  }
}

class ProjectCreateContainer extends React.Component {
  render () {
    const { handleClose, onSubmit } = this.props

    return (
      <Modal title='Create Project' onClose={handleClose}>
        <ProjectCreateForm onSubmit={onSubmit} />
      </Modal>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCreateContainer)
