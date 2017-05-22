import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import ProjectEdit from '../components/project-edit'
import Members from '../components/members-list'

import { projectActions } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.params.id] || {}

  if (project) {
    let members = values(pick(state.entities.members, project.members))

    return {
      project,
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
      dispatch(projectActions.loadProject(ownProps.params.id))
    },
    onSubmit: (data) => {
      console.log('onSubmit')
      console.log(data)
    }
  }
}

class ProjectEditContainer extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    const { project, members, initialValues, onSubmit } = this.props

    return (
      <div>
        <ProjectEdit {...project} initialValues={initialValues} onSubmit={onSubmit} />
        <h3>Members</h3>
        <Members members={members} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEditContainer)
