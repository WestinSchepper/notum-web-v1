import React from 'react'
import { Link } from 'react-router'
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
        <Project {...this.props.project}/>
        <h3>
          Members
          <Link to={`/projects/${this.props.params.id}/members/edit`}>
            <button>edit</button>
          </Link>
        </h3>
        <Members members={this.props.members}/>
        <h3>
          Standups
          <Link to={`/projects/${this.props.params.id}/standups/edit`}>
            <button>edit</button>
          </Link>
        </h3>
        <Standups standups={this.props.standups}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContainer)
