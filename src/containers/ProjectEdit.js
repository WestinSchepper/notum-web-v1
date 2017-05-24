import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import ProjectEdit from '../components/project-edit'
import MemberListEditContainer from './MemberListEdit'
import Alert from '../components/alert'

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
    handleDelete: () => {
      dispatch(projectActions.removeProject(ownProps.params.id))
      dispatch(replace('/'))
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
  constructor () {
    super()
    
    this.state = {
      alert: false
    }
  }
  
  componentWillMount () {
    this.props.loadData()
  }

  hideAlert () {
    this.setState({
      alert: false
    })
  }
  
  showAlert () {
    this.setState({
      alert: true
    })
  }
  
  deleteConfirmed () {
    this.props.handleDelete()
    this.hideAlert()
  }

  render () {
    const { project, initialValues, onSubmit, onDelete } = this.props

    return (
      <div>
        <ProjectEdit {...project} initialValues={initialValues} onSubmit={onSubmit} onDelete={onDelete} />
        <h3>Members</h3>
        <MemberListEditContainer {...this.props} />
        <button onClick={this.showAlert.bind(this)}>Delete {project.name}</button>
        {this.state.alert &&
          <Alert
            title='Are you sure?'
            message={`Do you really want to delete ${project.name} from your projects?`}
            cancelText='no'
            confirmText='yes'
            onCancel={this.hideAlert.bind(this)}
            onConfirm={this.deleteConfirmed.bind(this)}
          />}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEditContainer)
