import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import Project from '../components/project-detail'
import Members from '../components/members-list'
import Standups from '../components/standups-list'

import { projectActions } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.params.id] || {}

  if (project) {
    let members = values(pick(state.entities.members, project.members))
    let standups = values(pick(state.entities.standups, project.standups))

    return {
      project,
      members,
      standups
    }
  }

  return project
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(projectActions.loadProject(ownProps.params.id))
    }
  }
}

class ProjectContainer extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    return (
      <div>
        <Project {...this.props.project} />
        <h3>Members</h3>
        <Members members={this.props.members} />
        <h3>Standups</h3>
        <Standups standups={this.props.standups} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)
