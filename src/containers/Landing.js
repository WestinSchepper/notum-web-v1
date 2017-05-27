import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

import Members from '../components/members-list'
import Projects from '../components/projects-list'

import { projectsActions } from '../actions/projects'
import { membersActions } from '../actions/members'

import { getProjects, getMembers } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  let projects = getProjects(state)
  let members = getMembers(state)

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
    },
    createProject: () => {
      dispatch(push('/projects/create'))
    },
    createMember: () => {
      dispatch(push('/members/create'))
    }
  }
}

class Landing extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    const { projects, members, createProject, createMember, children } = this.props

    return (
      <div>
        <div className='project-list'>
          <h2>Projects <button onClick={createProject}>Add</button></h2>
          <Projects projects={projects} />
        </div>
        <div className='member-list'>
          <h2>Members <button onClick={createMember}>Add</button></h2>
          <Members members={members} />
        </div>
        {children}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
