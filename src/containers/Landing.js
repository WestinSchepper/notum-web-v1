import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import Members from '../components/members-list'
import Projects from '../components/projects-list'

import { projectsActions } from '../actions/projects'
import { membersActions } from '../actions/members'

const mapStateToProps = (state, ownProps) => {
  let projects = values(state.entities.projects) || []
  let members = values(state.entities.members) || []

  return {
    projects,
    members
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(projectsActions.loadProjects())
      dispatch(membersActions.loadMembers())
    }
  }
}

class Landing extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    return (
      <div>
        <div className='project-list'>
          <h2>Projects</h2>
          <Projects projects={this.props.projects} />
        </div>
        <div className='member-list'>
          <h2>Members</h2>
          <Members members={this.props.members} />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
