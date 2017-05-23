import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import ProjectEdit from '../components/project-edit'
import MemberListEditContainer from './MemberListEdit'

import { projectActions } from '../actions/projects'
import { membersActions } from '../actions/members'

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.params.id] || {}

  if (project) {
    let projectMembers = values(pick(state.entities.members, project.members))
    let members = state.entities.members

    return {
      project,
      projectMembers,
      members,
      initialValues: {
        name: project.name
      }
    }
  }

  return project
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(membersActions.loadMembers())
      dispatch(projectActions.loadProject(ownProps.params.id))
    },
    onSubmit: (data) => {
      const formattedData = {
        project: {
          name: data.name
        }
      }

      dispatch(projectActions.updateProject(ownProps.params.id, formattedData))
    }
  }
}

class ProjectEditContainer extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    const { project, initialValues, onSubmit } = this.props

    return (
      <div>
        <ProjectEdit {...project} initialValues={initialValues} onSubmit={onSubmit} />
        <h3>Members</h3>
        <MemberListEditContainer {...this.props} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEditContainer)
