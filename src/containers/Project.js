import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import pick from 'lodash/pick'

import Project from '../components/project-detail'
import Members from '../components/members-list'
import Standups from '../components/standups-list'

import { projectActions } from '../actions/projects'
import { membersActions } from '../actions/members'

import { getMembers, makeGetProjectMembers, makeGetProject } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const getProject = makeGetProject()
  const project = getProject(state, ownProps.params.id)

  if (project) {
    const getProjectMembers = makeGetProjectMembers()
    const projectMembers = getProjectMembers(state, project.id)

    let standups = pick(state.entities.standups, project.standups)
    let members = getMembers(state)

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
    },
    createStandup: () => {
      dispatch(push(`/projects/${ownProps.params.id}/create_standup`))
    }
  }
}

class ProjectContainer extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  createStandup () {
    this.props.createStandup()
  }

  render () {
    const { project, projectMembers, members, standups, children } = this.props

    return (
      <div>
        <Project {...project} />
        <h3>Members</h3>
        <Members members={projectMembers} />
        <h3>Standups <button onClick={this.createStandup.bind(this)}>Add</button></h3>
        <Standups standups={standups} members={members} project={project} />
        {children}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)
