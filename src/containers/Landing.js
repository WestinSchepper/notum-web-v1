import React from 'react'
import Members from '../components/members-list'
import Projects from '../components/projects-list'
import API from '../network/API'

import { connect } from 'react-redux'
import { addProjects } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    importProjects: (projects) => {
      dispatch(addProjects(projects))
    }
  }
}

class Landing extends React.Component {
  constructor () {
    super()

    this.state = {
      members: [],
      projects: []
    }
  }

  componentWillMount () {
    new API({uri: '/members'}).GET().then((members) => {
      this.setState({
        members
      })
    })

    new API({uri: '/projects'}).GET().then((projects) => {
      this.setState({
        projects
      })

      this.props.importProjects(projects)

    })
  }

  render () {
    return (
      <div>
        <div className='project-list'>
          <h2>Projects</h2>
          <Projects projects={this.state.projects} />
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
