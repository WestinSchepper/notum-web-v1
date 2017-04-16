import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Project from '../components/project-detail'
import Members from '../components/members-list'
import Standups from '../components/standups-list'
import API from '../network/API'

import { loadProject } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  let project = state.projects[ownProps.params.id] || {}

  return {
    project
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(loadProject(ownProps.params.id))
    }
  }
}

class ProjectContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      members: [],
      standups: []
    }
  }

  componentWillMount () {
    this.props.loadData()

    new API({uri: `/projects/${this.props.params.id}`}).GET().then((project) => {
      this.setState({
        members: project.members,
        standups: project.standups
      })
    })
  }

  render () {
    return (
      <div>
        <Project {...this.props.project}/>
        <h3>
          Members
          <Link to={`/projects/${this.props.params.id}/members/edit`}>
            <button>edit</button>
          </Link>
        </h3>
        <Members members={this.state.members}/>
        <h3>
          Standups
          <Link to={`/projects/${this.props.params.id}/standups/edit`}>
            <button>edit</button>
          </Link>
        </h3>
        <Standups standups={this.state.standups}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)
