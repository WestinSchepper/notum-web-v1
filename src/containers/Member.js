import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import Member from '../components/member-detail'
import Projects from '../components/projects-list'
import Standups from '../components/standups-list'
import API from '../network/API'

import { loadMember } from '../actions/members'

const mapStateToProps = (state, ownProps) => {
  let member = state.entities.members[ownProps.params.id] || {}

  if (member) {
    let projects = values(pick(state.entities.projects, member.projects))
    let standups = values(pick(state.entities.standups, member.standups))

    return {
      member,
      projects,
      standups
    }
  }

  return {
    member
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(loadMember(ownProps.params.id))
    }
  }
}

class MemberContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      projects: [],
      standups: []
    }
  }

  componentWillMount () {
    this.props.loadData()

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
        <Member {...this.props.member}/>
        <h3>Projects</h3>
        <Projects projects={this.props.projects}/>
        <h3>Standups</h3>
        <Standups standups={this.props.standups}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberContainer)
