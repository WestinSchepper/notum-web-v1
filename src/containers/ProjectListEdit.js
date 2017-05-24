import React from 'react'
import { connect } from 'react-redux'

import Project from '../components/project-item'
import List from '../components/list'

import { projectActions } from '../actions/projects'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (project) => {
      dispatch(projectActions.removeMember(project.id, ownProps.params.id))
    },
    onAdd: (project) => {
      dispatch(projectActions.addMember(project.id, ownProps.params.id))
    }
  }
}

class ProjectListEditContainer extends React.Component {
  configureAccessory (project) {
    const { memberProjects, onDelete, onAdd } = this.props
    const projectBelongsToMember = memberProjects.find((memberProject) => (memberProject.id === project.id))
    let accessory = null

    if (projectBelongsToMember) {
      let onDeleteBound = onDelete.bind(this, project)
      accessory = <button onClick={onDeleteBound}>Delete</button>

    } else {
      let onAddBound = onAdd.bind(this, project)
      accessory = <button onClick={onAddBound}>Add</button>

    }

    return accessory
  }

  configureProjectItem (project) {
    return (
      <Project
        {...project}
        rightAccessory={this.configureAccessory(project)}
      />
    )
  }

  render () {
    return (
      <List
        items={this.props.projects}
        configureItem={this.configureProjectItem.bind(this)}
      />
    )
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(ProjectListEditContainer)
