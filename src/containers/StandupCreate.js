import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import { formValueSelector } from 'redux-form'
import pick from 'lodash/pick'

import Modal from '../components/modal'
import StandupCreateForm from '../components/standup-create-form'

import { standupActions } from '../actions/standups'

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.params.id] || {}

  if (project) {
    const selector = formValueSelector('standupCreate')
    
    let projectMembers = pick(state.entities.members, project.members)
    let selectedMember = projectMembers[selector(state, 'memberId')] || {}

    return {
      project,
      projectMembers,
      selectedMember
    }
  }

  return {
    project
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClose: () => {
      dispatch(replace(`/projects/${ownProps.params.id}`))
    },
    onSubmit: (data) => {
      const formattedData = {
        standup: {
          project_id: ownProps.params.id,
          member_id: data.memberId,
          did: data.did,
          doing: data.doing,
          impediments: data.impediments
        }
      }

      dispatch(standupActions.createStandup(formattedData))
    }
  }
}

class StandupCreateContainer extends React.Component {
  render () {
    const { project, projectMembers, selectedMember, handleClose, onSubmit } = this.props

    return (
      <Modal title='Create Standup' onClose={handleClose}>
        <StandupCreateForm project={project} projectMembers={projectMembers} selectedMember={selectedMember} onSubmit={onSubmit} />
      </Modal>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandupCreateContainer)
