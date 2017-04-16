import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import Members from '../components/members-list'
import Projects from '../components/projects-list'
import API from '../network/API'

import { loadProjects } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  let projects = values(state.projects) || []

  return {
    projects
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadProjects: () => {
      dispatch(loadProjects())
    }
  }
}

class Landing extends React.Component {
  constructor () {
    super()

    this.state = {
      members: []
    }
  }

  componentWillMount () {
    new API({uri: '/members'}).GET().then((members) => {
      this.setState({
        members
      })
    })

    this.props.loadProjects()
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
          <Members members={this.state.members} />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
