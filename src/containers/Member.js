import React from 'react'
import Member from '../components/member-detail'
import Projects from '../components/projects-list'
import Standups from '../components/standups-list'
import API from '../network/API'

class MemberContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      member: {},
      projects: [],
      standups: []
    }
  }

  componentWillMount () {
    new API({uri: `/members/${this.props.params.id}`}).GET().then((member) => {
      this.setState({
        member
      })
    })

    new API({uri: `/members/${this.props.params.id}/projects`}).GET().then((projects) => {
      this.setState({
        projects
      })
    })

    new API({uri: `/members/${this.props.params.id}/standups`}).GET().then((standups) => {
      this.setState({
        standups
      })
    })
  }

  render () {
    return (
      <div>
        <Member {...this.state.member}/>
        <h3>Projects</h3>
        <Projects projects={this.state.projects}/>
        <h3>Standups</h3>
        <Standups standups={this.state.standups}/>
      </div>
    )
  }
}

export default MemberContainer
