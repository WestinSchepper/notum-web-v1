import React from 'react'
import Members from '../components/members-list'
import Projects from '../components/projects-list'
import API from '../network/API'

import { connect } from 'react-redux'
import { loadProjects } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.projects
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
          <Projects projects={this.props.projects || []} />
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
