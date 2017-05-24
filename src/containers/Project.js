import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import Project from '../components/project-detail'
import Members from '../components/members-list'
import Standups from '../components/standups-list'

import { projectActions } from '../actions/projects'
import { membersActions } from '../actions/members'

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.params.id] || {}

  if (project) {
    let projectMembers = values(pick(state.entities.members, project.members))
    let standups = pick(state.entities.standups, project.standups)
    let members = state.entities.members


    return {
      project,
      projectMembers,
      members,
      standups
    }
  }

  return project
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(membersActions.loadMembers())
      dispatch(projectActions.loadProject(ownProps.params.id))
    }
  }
}

class ProjectContainer extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    const { project, projectMembers, members, standups } = this.props

    return (
      <div>
        <Project {...project} />
        <h3>Members</h3>
        <Members members={projectMembers} />
        <h3>Standups</h3>
        <Standups standups={standups} members={members} project={project} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)
