import React from 'react'
import { Link } from 'react-router'
import Project from '../components/project-detail'
import Members from '../components/members-list'
import Standups from '../components/standups-list'
import API from '../network/API'

class ProjectContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      project: {},
      members: [],
      standups: []
    }
  }

  componentWillMount () {
    new API({uri: `/projects/${this.props.params.id}`}).GET().then((project) => {
      this.setState({
        project
      })
    })

    new API({uri: `/projects/${this.props.params.id}/members`}).GET().then((members) => {
      this.setState({
        members
      })
    })

    new API({uri: `/projects/${this.props.params.id}/standups`}).GET().then((standups) => {
      this.setState({
        standups
      })
    })
  }

  render () {
    return (
      <div>
        <Project {...this.state.project}/>
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

export default ProjectContainer
